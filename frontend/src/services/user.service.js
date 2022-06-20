import axios from 'axios';
import authHeader from './auth-header';
const baseURL = 'http://localhost:8080/'

class UserService {
    getProducts(){
        return axios.get(baseURL + 'product')
    }
    getOneProduct(id){
        return axios.get(baseURL + `product/${id}`)
    }
    deleteProduct(id){
        return axios.delete(baseURL + `product/${id}`, { headers: authHeader()});
    }
    addProduct(name, quantity, price){
        return axios.post(baseURL + 'product/register' + {
            name,
            quantity,
            price
        }, { headers: authHeader()} )
    }
    updateProduct(id, name, quantity, price){
        return axios.put(baseURL + `product/$${id}`, {
            name,
            quantity,
            price
        }, { headers: authHeader()} )
    }
}
export default new UserService()