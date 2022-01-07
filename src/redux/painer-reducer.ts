import { AppDispatch } from './redux-toolkit-store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PainerApi } from '../api/axiosApi';
import { ProductType } from '../api/Types';

export interface IntitialState {
    _id: string,
    userId: string,
    totalCount: number,
    products: ProductType[],
    message?: string
}


const initialState: IntitialState = {
    products: [] as ProductType[]
} as IntitialState


const slice = createSlice({
    name: 'painer',
    initialState,
    reducers: {
        getPainer(state, action: PayloadAction<IntitialState>) {
            state._id = action.payload._id
            state.products = action.payload.products
            state.totalCount = action.payload.totalCount
            state.userId = action.payload.userId
        },
        addProductTo(state, action) {
            state.products = action.payload
        },
        deleteProductInto(state,action){
            const index = action.payload
            console.log(action.payload)
            const product = state.products[index]
            state.totalCount = state.totalCount - product.value!
            state.products.splice(index,1)
        }
    }
})



export const {deleteProductInto,addProductTo, getPainer } = slice.actions

export const fetchPainer = (userId: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await PainerApi.getPainerUser(userId)

        dispatch(getPainer(response.data))
    } catch (e) {

    }
}

export const addProduct = (productId: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await PainerApi.addProduct(productId)
        if (response.data.message == 'Такой товар в корзине уже есть') {
            return
        }
        dispatch(getPainer(response.data))
    } catch (e) {

    }
}


export const deleteProduct = (productId: string,index:number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(deleteProductInto(index))
        const response = await PainerApi.deleteProduct(productId)
        
        // dispatch(getPainer(response.data))
    } catch (e) {

    }
}


export const buyProduct = () => async (dispatch: AppDispatch) => {
    try {
        const response = await PainerApi.buyProduct()        
    } catch (e) {
        console.log(e)
    }
}


export default slice.reducer