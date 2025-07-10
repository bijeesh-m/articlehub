import axios from "axios";

const axiosInstance = axios.create({ baseURL: "https://articlehub-z90q.onrender.com", withCredentials: true });

export default axiosInstance;
