import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://52.14.100.212:11000/api/',
    baseURL: 'https://3f0a39c95704.ngrok.io/api/'
});

export default api;