import axios from "axios";

const baseurl = 'https://3490-2405-201-a405-4052-6569-40cd-3f98-6165.in.ngrok.io/';

const apihit = axios.create({
    baseURL:baseurl,
    withCredentials:true
});

export default apihit;