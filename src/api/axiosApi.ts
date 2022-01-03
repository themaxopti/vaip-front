import { ChangeUser, UserInformation } from './../redux/user-reducer';
import axios from "axios";
import { ProductType, RegisterType } from "./Types";
import config from '../config.json'

export const api = axios.create({
    withCredentials: true,
    // baseURL: 'https://nosigarets.herokuapp.com/api',
    baseURL:'http://localhost:4000/api',
    responseType: 'json'
})

api.interceptors.request.use((config) => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})



api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    console.log(originalRequest)
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const response = await axios.get(`http://localhost:4000/api/refresh`, { withCredentials: true })
            localStorage.setItem('token', response.data.accessToken)
            return api.request(originalRequest)
        } catch (e) {
            console.log(e)
        }
    }
})



const localApi = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:4000/api',
    responseType: 'json'
})

export class ProductsApi {

    titleProduct: string

    constructor(title: string) {
        this.titleProduct = title
    }

    static async getRandomItems() {
        return api.get<ProductType>('/products/random')
    }

    async getCurrentProduct() {
        return api.get<ProductType>(`/${this.titleProduct}/all`)
    }

    static async getOneProduct(_id: string) {
        return api.get<ProductType>(`/products/${_id}`)
    }
}



const token = JSON.parse(  '{}')


interface Register {
    message: string,
    tokens: {
        accessToken: string,
        refreshToken: string
    }
}

export class UserApi {
    constructor() {

    }

    static async login(email: string, password: string) {
        return api.post<UserInformation>('/login', { email, password })
    }

    static async auth() {
        return await axios.get<UserInformation>(`http://localhost:4000/api/refresh`, { withCredentials: true })

        // return api.get<UserInformation | any>('/auth', { withCredentials: true })
    }

    static async registerUser(password: string, email: string, name: string) {
        return api.post<Register>('/register', {
            password,
            email,
            name
        })
    }

    static async logOut() {
        return api.post('/logout')
    }


    static async changeUser(name: string, email: string, phone: string, surname: string, father: string) {
        return api.post<ChangeUser | any>('/changeUser', {
            name, email, phone, surname, father,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}


export class TestApi {
    static async testQuery() {
        localApi.get('/auth', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}