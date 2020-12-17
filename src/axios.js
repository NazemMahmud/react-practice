import axios from 'axios';

// custom instance for seprating from global config
const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
});

export default instance;