import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const todosService = {
    getAll:()=>axiosService.get(urls.todos)
}