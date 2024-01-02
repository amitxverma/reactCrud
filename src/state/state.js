import {applyMiddleware, createStore} from "redux"
import  Reducers from "./reducers" 

export const store = createStore(Reducers, {}, applyMidd)