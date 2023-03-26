const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
let initialState = {
    users: [
        {id: 1, photoURL:'', followed: true, fullName: 'Tokhir', status:'I have a knife', location: {city: 'AbemusGrad', country: 'Uzbekistan'},},
        {id: 2, photoURL:'', followed: false, fullName: 'Limon', status:'I got stubbed', location: {city: 'Usherbinsk', country: 'Ukraine'},},
    ],
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
                })
            }
        case SET_USERS:{
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}
export const followAC= (usersId) => ({type:FOLLOW, usersId})
export const unfollowAC = (usersId) => ({type: UNFOLLOW, usersId})
export const setUsersAC = (users) => ({type: SET_USERS}, users)
export default usersReducer