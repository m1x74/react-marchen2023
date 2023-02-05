import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const albumService = {
    getAll:()=>axiosService.get(urls.albums)
}