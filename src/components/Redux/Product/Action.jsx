import { SET_PRODUCT } from "./ActionTypes";
export function setProduct(product){
    return{
        type:SET_PRODUCT,
        payload:product
    }
}