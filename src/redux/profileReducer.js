import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS'

let initialState = {
    posts: [
        {id: 1, message: 'Hi everyone, Who know good psychologist', likesCount: 12},
        // {id: 2, message: 'WASSAP, I`VE JUST ATE MY MOTHER', likesCount: 20},
    ],
    newPostText: '',
    profile: null,
    status: '',
}
const profileReducer = (state = initialState, action) => {
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
            return {...state, profile: {...state.profile, photo: action.photo}}
        }
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostElement) => {
    return {type: ADD_POST, newPostElement}
}
export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
}
export const setStatus = (status) => ({type: SET_STATUS, status})
export const getUserProfile = (userId) => async (dispatch) => {
        if (!userId) {
            userId = 2;//28574;
        }
        let response = await profileAPI.getUserProfile(userId)

                dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhotoSuccess = (photo) =>({type: SAVE_PHOTO_SUCCESS, photo})
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
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