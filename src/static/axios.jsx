import axios from "axios";

const baseurl = 'https://0d77-2409-4064-2d12-16cf-ed12-988f-5bee-74a6.in.ngrok.io/';

const apihit = axios.create({
    baseURL:baseurl,
    withCredentials:true
});

export default apihit;