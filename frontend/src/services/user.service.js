import axios from 'axios';
import authHeader from './auth-header';
const baseURL = 'http://localhost:8080/'

class UserService {
    getProducts(){
        return axios.get(baseURL + 'products')
    }
    getOneProduct(id){
        return axios.get(baseURL + `products/${id}`)
    }
    deleteProduct(id){
        return axios.delete(baseURL + `products/${id}`, { headers: authHeader()});
    }
    addProduct(name, quantity, price){
        return axios.post(baseURL + 'products' + {
            name,
            quantity,
            price
        }, { headers: authHeader()} )
    }
    updateProduct(id, name, quantity, price){
        return axios.put(baseURL + `products/$${id}`, {
            name,
            quantity,
            price
        }, { headers: authHeader()} )
    }
}
export default new UserService()