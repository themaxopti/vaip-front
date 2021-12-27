import axios from "axios";
import { ProductType } from "./Types";

const api = axios.create({
    baseURL: 'https://nosigarets.herokuapp.com/api',
    responseType: 'json'
})


export class ProductsApi {

    titleProduct:string

    constructor(title:string){
        this.titleProduct = title
    }

    static async getRandomItems() {
        return api.get<ProductType>('/products/random')
    }

    async getCurrentProduct(){        
            return api.get<ProductType>(`/${this.titleProduct}/all`)
    }

    static async getOneProduct(_id:string){
        return api.get<ProductType>(`/products/${_id}`)
    }

}

