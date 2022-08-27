import axios from "axios";

const baseurl = 'https://713c-2405-201-a405-4052-360-9c2f-5a9e-8abc.in.ngrok.io/';

const apihit = axios.create({
    baseURL:baseurl,
    withCredentials:true
});

export default apihit;