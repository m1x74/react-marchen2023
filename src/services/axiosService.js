import axios from "axios";
import {baseURL} from "../links/links";

const axiosService=axios.create({baseURL});

export {
    axiosService
}