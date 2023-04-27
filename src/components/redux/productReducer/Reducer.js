import { ProductReducer } from "./ProductReducer";
import {combineReducers} from 'redux'

export const reducer = combineReducers({
    productData : ProductReducer
})