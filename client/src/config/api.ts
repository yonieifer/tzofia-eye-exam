import axios from "axios";
import useAuthStore from "../store/useAuthStore";

const api = axios.create({ baseURL: "http://localhost:3000" });

api.interceptors.request.use(
    function (config) {
        const token = useAuthStore.getState().token;
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);
export default api;
