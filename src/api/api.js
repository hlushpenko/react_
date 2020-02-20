import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "cda002cd-0608-42f2-bc80-c8912b3da152"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    subscribeUser(id) {
        return instance.post(`follow/${id}`);
    },
    unsubscribeUser(id) {
        return instance.delete(`follow/${id}`);
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    }
};

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
    }
}

