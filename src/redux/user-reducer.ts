import { UserApi } from './../api/axiosApi';
import { AppDispatch } from './redux-toolkit-store';
import { ProductType, RegisterType } from './../api/Types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useLocalStorage } from '../components/hooks/useLocalStorage';
import axios from 'axios';


export interface ChangeUser {
    userName: string,
    surrname: string,
    father: string,
    phome: string,
    userEmail: string
}

export type UserInformation = {
    userName: string,
    accessToken: string,
    refreshToken: string,
    // token: string,
    surrname: string,
    father: string,
    phome: string,
    userEmail: string,
    isActivated: boolean,
    userId: string
}

type PanierType = {
    _id: string,
    userId: string,
    totalCount: number,
    userName: string,
    products: ProductType[],
}


interface InitialState {
    userInformation: UserInformation,
    isAuth: boolean,
    panier: PanierType,
    messageRegisterForm: string,
    fetchUser: boolean,
    messageLoginForm: string,
    fetchAuth: boolean,
    messageChangeUser: string
}

const initialState: InitialState = {
    userInformation: {} as UserInformation,
    isAuth: false,
    panier: {} as PanierType,
    messageRegisterForm: '',
    fetchUser: false,
    messageLoginForm: '',
    fetchAuth: false,
    messageChangeUser: ''
}

const slice = createSlice({
    name: 'user-reducer',

    initialState,

    reducers: {
        getUserData(state, action: PayloadAction<UserInformation>) {
            state.userInformation = action.payload
        },
        registerUserData(state, action) {
            state.messageRegisterForm = action.payload
        },
        fetchUserData(state) {
            state.fetchUser = true
        },
        fetchUserDataSucces(state) {
            state.fetchUser = false
        },
        getMessageLogin(state, action) {
            state.messageLoginForm = action.payload
        },
        setAuth(state, action) {
            state.isAuth = action.payload
        },
        fetchAuth(state) {
            state.fetchAuth = true
        },
        fetchAuthSuccess(state) {
            state.fetchAuth = false
        },
        changeUserData(state, action: PayloadAction<ChangeUser>) {
            const { userName, userEmail, phome, father, surrname } = action.payload
            state.userInformation.father = father
            state.userInformation.phome = phome
            state.userInformation.userName = userName
            state.userInformation.userEmail = userEmail
            state.userInformation.surrname = surrname
        },
        setMessageChangeUser(state, action) {
            state.messageChangeUser = action.payload
        }
    }
})


export const { changeUserData, setMessageChangeUser, fetchAuthSuccess, fetchAuth, setAuth, getMessageLogin, getUserData, registerUserData, fetchUserData, fetchUserDataSucces } = slice.actions


interface UserData {
    name: string,
    surrname: string,
    father: string,
    phome: string,
    email: string,
}



export const fetchRegisterUser = (password: string, email: string, name: string) => async (dispatch: AppDispatch) => {
    try {
        let statusCode = ''
        const respnonse = await UserApi.registerUser(password, email, name)
        dispatch(registerUserData(respnonse.data.message))
        console.log(respnonse)
        if (respnonse.data.message = 'Пользователь создан') {
            statusCode = '201'
        }
        localStorage.setItem('token', respnonse.data.tokens.accessToken)
        return statusCode
    } catch (e) {
        console.log(e)
    }
}

interface UserDataLogin {
    email: string,
    password: string
}

export const login = (userData: UserDataLogin) => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchUserData())

        const { email, password } = userData
        const response = await UserApi.login(email, password)
        let statusCode = 0

        if (response.data.accessToken) {
            dispatch(getUserData(response.data))
            statusCode = 301
        }
        if (!response.data.accessToken) {
            dispatch(getMessageLogin('Не верные данные при входе'))
            dispatch(fetchUserDataSucces())
            return
        }

        localStorage.setItem('token', JSON.stringify(response.data.accessToken || null))
        dispatch(fetchUserDataSucces())
        return statusCode
    } catch (e) {
        console.log(e)
    }
}

export const auth = () => async (dispatch: AppDispatch) => {
    try {

        dispatch(fetchAuth())

        const response = await UserApi.auth()
        // const response = await axios.get<UserInformation>(`${config.API_URL}/api/refresh`, { withCredentials: true })


        if (response.data.userId) {
            console.log('400')
            dispatch(getUserData(response.data))
        }
        // @ts-ignore
        if (response.data.message == 'Что-то пошло не так с авторизацией') {
            console.log('500')
            localStorage.removeItem('token')
            dispatch(getUserData({} as UserInformation))
            dispatch(setAuth(false))
            dispatch(fetchAuthSuccess())
            return
        }
        const token = localStorage.getItem('token')
        dispatch(setAuth(true))
        dispatch(fetchAuthSuccess())
        return response.data
    } catch (e) {

    }
}

export const logOut = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(setAuth(false))
        await UserApi.logOut()
        localStorage.removeItem('token')
        dispatch(getUserData({} as UserInformation))
        console.log(localStorage.getItem('token'))
    } catch (e) {
        console.log(e)
    }
}

export const changeUser = (name1: string, email1: string, phone1: string, surname1: string, father1: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await UserApi.changeUser(name1, email1, phone1, surname1, father1)
        if (response.data.message == 'Что-то пошло не так с авторизацией') {
            return dispatch(setMessageChangeUser('Вы не авторизованы'))
        }
        if (response.data.message == 'Введите корректные данные') {
            return dispatch(setMessageChangeUser('Введите корректные данные'))
        }

        dispatch(changeUserData(response.data))
    } catch (e) {
        console.log(e)
    }
}

export default slice.reducer