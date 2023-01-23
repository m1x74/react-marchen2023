import axios from "axios";

const axiosServiceUser = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

export {
    axiosServiceUser
}