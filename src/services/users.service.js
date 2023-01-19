import {axiosServiceUser} from "./axios.service";

const userService = {
    getAll: () => axiosServiceUser.get('/users'),
    getById: (id) => axiosServiceUser.get(`/users/${id}`)
}

export {
    userService
}