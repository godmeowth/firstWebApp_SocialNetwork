import axios from "axios";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const GET_USERS = 'GET_USERS'
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE'
const SET_TOTAL_COUNT ='SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
let initialState = {
    users: [],
    pageSize: 3,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
};
const usersReducer = (state = initialState, action) =>{
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.usersId){
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.usersId){
                        return{...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:{
            return {...state, users: action.users}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching}
        }
        case GET_USERS:{
                return (dispatch) => {
                    axios
                        .get("https://social-network.samuraijs.com/api/1.0/users")
                        .then((response) => {
                            dispatch({ type: 'SET_USERS', payload: response.data.items });
                        });
                };
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT:{
            return {...state, totalUserCount: action.count}
        }
        default:
            return state;
    }
}
export const followAC= (usersId) => ({type:FOLLOW, usersId})
export const unfollowAC = (usersId) => ({type: UNFOLLOW, usersId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const getUsersAC = (users) => ({type: GET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC =(totalCount) => ({type: SET_TOTAL_COUNT, count:totalCount})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export default usersReducer