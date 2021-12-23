import { applyMiddleware, combineReducers, createStore,compose } from "redux";

import thunkMiddleware from "redux-thunk";
import testReducer from '../redux/test-reducer'

let rootReducer = combineReducers({
    testPage:testReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunkMiddleware)))



type RootReducerType = typeof rootReducer; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>


// @ts-ignore
window.__store__ = store



export default store