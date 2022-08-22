import axios from "axios";

const baseurl = 'https://5954-2405-201-a405-4052-7d93-f488-5b2-760a.in.ngrok.io/';

const apihit = axios.create({
    baseURL:baseurl,
    withCredentials:true
});

export default apihit;