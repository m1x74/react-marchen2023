import {axiosService} from "./axiosService";

import {urls} from "../urls";

const commentsService={
    getAll:axiosService.get(urls.comments)
}

export {
    commentsService
}