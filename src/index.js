import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";



axios.defaults.baseURL = 'http://localhost:8055/api/admin';
let token= localStorage.getItem('admin_token')

if(token) {
axios.defaults.headers.common['Authorization'] =  "Bearer ".concat( token.replace('\"',"").replace('\"',""))
}


//set axios interceptor request
axios.interceptors.request.use((config) => {
    if (document.getElementById("loadingIman")) document.getElementById("loadingIman").style.display = "block";

    return config;
});

//set axios interceptor response
axios.interceptors.response.use(function (response) {
    if (document.getElementById("loadingIman")) document.getElementById("loadingIman").style.display = "none";
    return response;
}, function (error) {
    if (document.getElementById("loadingIman")) document.getElementById("loadingIman").style.display = "none";
    return Promise.reject(error);
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
