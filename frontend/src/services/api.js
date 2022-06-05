import axios from 'axios'
const baseURL = 'http://localhost:8000'

export const getAllProducts = () => {
    return axios.get(`${baseURL}/products`);
}