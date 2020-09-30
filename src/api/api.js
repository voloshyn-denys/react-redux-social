import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  // headers: {
  //   "API_KEY": "67825fc6-d51b-4954-8ec0-cb6811466204"
  // }
})

export const UsersAPI = {
  getUsers: (currentPage = 1, pageCount = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageCount}`)
      .then(response => (response.data))
  }
}

export const ProfileAPI = {
  getProfile: (userId = 2) => {
    return instance.get(`profile/${userId}`)
      .then(response => (response.data))
  }
}