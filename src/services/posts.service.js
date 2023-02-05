import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const postsService = {
    getpostById:(id)=>axiosService.get(urls.postbyId(id))
}