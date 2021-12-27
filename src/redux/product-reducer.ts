import { ProductType } from './../api/Types';
import { AppDispatch } from './redux-toolkit-store';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsApi } from '../api/axiosApi';
import axios from 'axios';

interface InitialState {
    randomItems: ProductType[],
    waitProducts: boolean,
    currentProductOnPage:ProductType[],
    fetchingProducts:boolean,
    oneProduct:ProductType
}

const initialState: InitialState = {
    randomItems: [],
    waitProducts: false,
    currentProductOnPage:[],
    fetchingProducts:false,
    oneProduct:{} as ProductType
}



const slice = createSlice({
    name: 'mainTitle',
    initialState,
    reducers: {
        getRandomItem(state, action) {
            console.log(action.payload.data)
            state.randomItems = action.payload.data
        },
        fetchingWaitItems(state) {
            state.waitProducts = true
        },
        fetchingWaitItemsSuccess(state) {
            state.waitProducts = false
        },
        getAllCurrentProduct(state,action){
            state.currentProductOnPage = action.payload.data
        },
        fetchingWaitProducts(state) {
            state.fetchingProducts = true
        },
        fetchingWaitProductsSuccess(state) {
            state.fetchingProducts = false
        },
        getOneProduct(state,action){
            state.oneProduct = action.payload
        }
    }
})




export const { getOneProduct,getRandomItem, fetchingWaitItems, fetchingWaitItemsSuccess,fetchingWaitProducts,fetchingWaitProductsSuccess,getAllCurrentProduct} = slice.actions

export const fetchRandomItems = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingWaitItems())
        const response = await ProductsApi.getRandomItems()
        dispatch(getRandomItem(response))
        dispatch(fetchingWaitItemsSuccess())
    } catch (e) {
        console.log(e)
    }
}



export const fetchCurrentProducts = (title:string) => async (dispatch:AppDispatch) => {
    try {
        dispatch(fetchingWaitProducts())
        const api = new ProductsApi(title)
        const response = await api.getCurrentProduct()
        dispatch(getAllCurrentProduct(response))
        dispatch(fetchingWaitProductsSuccess())
    }catch(e){
        console.log(e)
    }
}


export const fetchOneProduct = (_id:string) => async (dispatch:AppDispatch) => {
    try {
        dispatch(fetchingWaitProducts())
        const response = await ProductsApi.getOneProduct(_id)
        dispatch(getOneProduct(response.data))
        dispatch(fetchingWaitProductsSuccess())
    }catch(e){
        console.log(e)
    }
}


export default slice.reducer
