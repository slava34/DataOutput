import axios from "axios";

const baseService = axios.create({
    baseURL: 'http://62.217.182.170/',
    headers: {
        Authorization: 'Basic dXNlcjpwYXNzd29yZA=='
    }
})

export default baseService