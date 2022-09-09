import axios from "axios";

const baseurl = 'https://10.42.0.1:8000/';

const apihit = axios.create({
    baseURL: baseurl,
    withCredentials: true
});

export default apihit;