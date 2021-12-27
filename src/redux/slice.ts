import { AppDispatch } from './redux-toolkit-store';
import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Add {
    text: string
}

const add = createAction<Add>('INCREMENT')


const slice = createSlice({
    name: 'test',
    initialState: {
        hello: 'hello'
    },

    reducers: {
        increment(state) {
            console.log('11')
            state.hello = 'asdasdas'
        }
    },
})


export const asyncFunc = () => async (dispatch: AppDispatch) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(() => console.log(1))
        dispatch(slice.actions.increment())
    } catch (e) {

    }
}


export const { increment } = slice.actions

export default slice.reducer 