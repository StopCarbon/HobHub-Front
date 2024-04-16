import axios from 'axios';

export const http = axios.create({
    baseURL: process.env.REACT_APP_FLASK_URL,
    withCredentials: true,
});

const token = window.localStorage.getItem('accessToken') ?? false;

http.defaults.headers.common['Authorization'] = token
    ? `Bearer ${token}`
    : null;
