import {axiosServiceSpace} from "./axios.service";

const spaceService = {
    getAll: () => axiosServiceSpace.get()
};
export {spaceService}