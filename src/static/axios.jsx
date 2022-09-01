import axios from "axios";

const baseurl = 'https://10.21.84.147:8000/';

const apihit = axios.create({
    baseURL:baseurl,
    withCredentials:true
});

export default apihit;