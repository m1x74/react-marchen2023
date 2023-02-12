import {axiosService} from "./axiosService";

import {urls} from "../urls";

const postsService = {
    getAll:()=>axiosService.get(urls.posts)
}

export {
    postsService
}