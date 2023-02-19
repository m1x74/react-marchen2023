import {axiosService} from "./axiosService";
import {links} from "../links";


const userService ={
    getAll:()=>axiosService.get(links.users),
    getById:(id)=>axiosService.get(`${links.users}/${id}`)
};

export {
    userService
}