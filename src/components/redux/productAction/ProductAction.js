import {Type} from "../types/Type"

export const addToCart=(product)=>{
    return {
        type : Type.addToCart,
        payload : product
    }
}

export const deleteFromCart=(product)=>{
    return {
        type : Type.deleteFromCart,
        payload : product
    }
}