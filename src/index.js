import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';

// Handling request
axios.interceptors.request.use(request => {
    console.log(request);

    return request; // Always have to return request
}, error => {
    console.log(error); // not work

    return Promise.reject(error); // Always have to return request
})

// Handling response
axios.interceptors.request.use(response => {
    console.log(response);
    return response; // Always have to return request
}, error => {
    console.log(error); 
    return Promise.reject(error); // Always have to return request
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
