import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 3){
        return instance
            .get( `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId){
        return instance
            .post(`follow/${userId}`, )
    },
    unfollow(userId){
        return instance
            .delete(`follow/${userId}`, )
    }
}
export const headerAPI = {
    getAuthUserData () {
        return instance
            .get(`auth/me`, {withCredentials: true})
    }
}

export const profileAPI = {
    getUserProfile (userId){
        return instance
            .get(`/profile/` + userId)
    }
}

