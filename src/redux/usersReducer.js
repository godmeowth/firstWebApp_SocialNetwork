import axios from "axios";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const GET_USERS = 'GET_USERS'
let initialState = {
    users: [],
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
            return {...state, users: [...state.users, ...action.users]}
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
        default:
            return state;
    }
}
export const followAC= (usersId) => ({type:FOLLOW, usersId})
export const unfollowAC = (usersId) => ({type: UNFOLLOW, usersId})
export const setUsersAC = (users) => ({type: SET_USERS}, users)
export const getUsersAC = (users) => ({type: GET_USERS}, users)
export default usersReducer