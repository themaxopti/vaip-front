import { UserApi } from './../api/axiosApi';
import { AppDispatch } from './redux-toolkit-store';
import { ProductType, RegisterType } from './../api/Types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useLocalStorage } from '../components/hooks/useLocalStorage';


export interface GetUserInformData {
    name: string,
    token: string,
    surrname: string,
    father: string,
    phome: string,
    email: string,
    isActivated: boolean,
    _id: string
}

type UserInformation = {
    name: string,
    token: string,
    surrname: string,
    father: string,
    phome: string,
    email: string,
    isActivated: boolean,
    _id: string
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
    messageLoginForm: string
}

const initialState: InitialState = {
    userInformation: {} as UserInformation,
    isAuth: false,
    panier: {} as PanierType,
    messageRegisterForm: '',
    fetchUser: false,
    messageLoginForm: ''
}

const slice = createSlice({
    name: 'user-reducer',

    initialState,

    reducers: {
        getUserData(state, action: PayloadAction<GetUserInformData>) {
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
        }
    }
})


export const { getMessageLogin, getUserData, registerUserData, fetchUserData, fetchUserDataSucces } = slice.actions


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
        const { email, password } = userData
        dispatch(fetchUserData())
        const response = await UserApi.login(email, password)
        let statusCode = 0

        if (response.data.token) {
            dispatch(getUserData(response.data))
            statusCode = 301
        } 
        if(!response.data.token) {
            dispatch(getMessageLogin('Не верные данные при входе'))
            dispatch(fetchUserDataSucces())
            return
        }

        localStorage.setItem('token', JSON.stringify(response.data.token || null))
        dispatch(fetchUserDataSucces())
        return statusCode
    } catch (e) {
        console.log(e)
    }
}

export default slice.reducer