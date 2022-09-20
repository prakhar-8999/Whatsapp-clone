import axios from "axios";

const baseurl = 'https://localhost:8000/';

const apihit = axios.create({
    baseURL: baseurl,
    withCredentials: true
});

export default apihit;