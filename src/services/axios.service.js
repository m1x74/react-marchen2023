import axios from "axios";

const axiosServiceUser = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});
const axiosServiceSpace = axios.create({baseURL: 'https://api.spacexdata.com/v3/launches/'});

export {
    axiosServiceUser, axiosServiceSpace
}