import axios from 'axios';

const api = axios.create({
    /*baseURL: 'http://localhost:3555'*/
    baseURL: 'https://vollpilates-node.herokuapp.com'
});

export default api;