import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ContactsType, PhotosType, PostType} from "../types/types";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS'



type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi everyone, Who know good psychologist', likesCount: 12},
        // {id: 2, message: 'WASSAP, I`VE JUST ATE MY MOTHER', likesCount: 20},
    ] as Array<PostType>,
    newPostText: '' as string,
    profile: null as ProfileType | null,
    status: '' as string ,
}

export type InitialStateType = typeof initialState
const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = action.newPostElement
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: newPost, likesCount: 0}]
            };
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photo: action.photo} as ProfileType }
        }
        default:
            return state;
    }
}


type AddPostActionCreatorType = {type: typeof ADD_POST; newPostElement: string}
export const addPostActionCreator = (newPostElement: string):AddPostActionCreatorType => ({type: ADD_POST, newPostElement})

type SetUserProfileType = {type: typeof  SET_USER_PROFILE; profile: ProfileType}
export const setUserProfile = (profile: ProfileType):SetUserProfileType => ({type: SET_USER_PROFILE, profile})

type SetStatusType = {type: typeof SET_STATUS; status: string}
export const setStatus = (status: string): SetStatusType => ({type: SET_STATUS, status})

export const getUserProfile = (userId: number) => async (dispatch: any) => {
        if (!userId) {
            userId = 2;//28574;
        }
        let response = await profileAPI.getUserProfile(userId)

                dispatch(setUserProfile(response.data));
}
export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhotoSuccess = (photo: PhotosType) =>({type: SAVE_PHOTO_SUCCESS, photo})
export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any ) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
    else{
        dispatch(stopSubmit("edit-profile", {_error: response.data.message[0 ]}))
    }
}



export default profileReducer;