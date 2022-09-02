import axios from "axios";

const baseurl = 'https://10.21.86.98:8000/';

const apihit = axios.create({
    baseURL: baseurl,
    withCredentials: true
});

export default apihit;