import {usersAPI} from "../api/api";
import {objectHelperInArray} from "../utils/objectHelpers";
import {PhotosType, UserType} from "../types/types";
import User from "../components/Users/User";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'



let initialState = {
    users: [] as Array<UserType>,
    pageSize: 3,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>,
};

export type IntialStateType = typeof initialState
const usersReducer = (state = initialState, action: any): IntialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: objectHelperInArray(state.users, action.userId, 'id', {followed: true}),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: objectHelperInArray(state.users, action.userId, 'id', {followed: false}),
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUserCount: action.count}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS : {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}


type FollowSuccessType = {
    type: typeof FOLLOW;
    userId: number;
}
export const followSuccess = (userId: number): FollowSuccessType => ({type: FOLLOW, userId})

type UnfollowSuccessType = {
    type: typeof UNFOLLOW;
    userId: number;
}
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({type: UNFOLLOW, userId})

type SetUsersType = {
    type: typeof SET_USERS;
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users})

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})

type SetUsersTotalCountType ={
    type: typeof SET_TOTAL_COUNT;
    count: number;
}
export const setUsersTotalCount = (totalCount: number): SetUsersTotalCountType => ({type: SET_TOTAL_COUNT, count: totalCount})

type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})

type ToggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const requestUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true))

        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount))
    }
}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: number) => async (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let apiMethod = usersAPI.follow.bind(usersAPI)
   followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)
}

export const unfollow = (userId: number) => async (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    let apiMethod = usersAPI.unfollow.bind(usersAPI)
    followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess)
}


export default usersReducer

