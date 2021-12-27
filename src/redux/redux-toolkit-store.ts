import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import reducer from './slice'
import mainTitleReducer from './product-reducer'
import userReducer from './user-reducer'
// ...


const store = configureStore({
    reducer: {
        sliceRed: reducer,
        products: mainTitleReducer,
        user:userReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    })
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store