import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    posts: [
        {id: 1, message: 'Hi everyone, Who know good psychologist', likesCount: 12},
        {id: 2, message: 'WASSAP, I`VE JUST ATE MY MOTHER', likesCount: 20}
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
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostElement) => {
    return {type: ADD_POST, newPostElement}
}
export const setUserProfile = (profile) => {
    return{type: SET_USER_PROFILE, profile}
}
export const setStatus = (status) => ({type:SET_STATUS, status})
export const getUserProfile = (userId) => {
    return (dispatch) => {
        if(!userId) {
            userId = 2 ;//28574;
        }
        profileAPI.getUserProfile(userId)
            .then((response) => {
                dispatch(setUserProfile(response.data));
            });
    }
}
export const getStatus = (userId) =>{
    return(dispatch) => {
        profileAPI.getStatus(userId)
            .then((response) => {
                    dispatch(setStatus(response.data))
            })

    }
}
export const updateStatus = (status) =>{
    return(dispatch) => {
        profileAPI.updateStatus(status)
            .then((response) => {
                if(response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}


export default profileReducer;