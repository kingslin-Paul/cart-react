import { addToCart , deleteFromCart } from "../productAction/ProductAction";

const initialstate = {
    cartdata : []
}
export const ProductReducer = ( state = initialstate , action)=>{
console.log(action.payload)
    switch(action.type){
        case "addToCart" : 

        // console.log(action.payload.id);

        const exist = state?.cartdata?.find((item)=>{
          return item.id === action.payload.id
        })

        if(exist){
            console.log(state.cartdata)
             const data=state.cartdata.map((item)=>(
                item.id === action.payload.id ? {...item,qty:exist.qty + 1} : item
             ))

            return {
                ...state,cartdata : [...data]
            }
        }else{
        
            return{
                ...state,cartdata: [...state.cartdata,{...action.payload,qty:1}]
            }
        }

        case "deleteFromCart" : 

        if(action.payload.qty === 1){
            console.log('this is iff')
        const filtered =state.cartdata.filter((product)=>{
               return product.id !== action.payload.id
        })

        return{
            ...state , cartdata : [...filtered]
        }
        }else{
           const reducedQty = state.cartdata.map((product)=>(
            product.id === action.payload.id ? {...product , qty : action.payload.qty - 1} : product
           ));

           return{
            ...state , cartdata : [...reducedQty]
           }
        };

        default : 
        return state
}

}