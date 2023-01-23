import {axiosServiceUser} from "./axios.service";

const postService={
    getAll: (id)=>axiosServiceUser(`/posts?userId=${id}`)
}

export default postService