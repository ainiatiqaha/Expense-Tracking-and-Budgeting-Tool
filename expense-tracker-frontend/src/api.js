import axios from "axios";

// Set up a default Axios instance
const API = axios.create({
    baseURL: "http://localhost:8001", // Replace with your backend URL
});

// Add an interceptor to include JWT in headers
API.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); // Assume the token is stored in localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error);
    }
);

export default API;