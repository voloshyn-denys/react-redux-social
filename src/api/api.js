import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "67825fc6-d51b-4954-8ec0-cb6811466204"
  }
})

export const usersAPI = {
  getUsers: (currentPage = 1, pageCount = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageCount}`)
      .then(response => (response.data))
  },

  follow: (userId) => {
    return instance.post(`/follow/${userId}`)
  },
  
  unfollow: (userId) => {
    return instance.delete(`/follow/${userId}`)
  }
}

export const authAPI = {
  getAuthMe: () => {
    return instance.get(`auth/me`)
      .then(response => (response.data))
  }
}

export const profileAPI = {
  getProfile: (userId) => {
    return instance.get(`profile/${userId}`)
      .then(response => (response.data))
  }
}