import { SET_CATEGORY } from "./ActionTypes";
export function setCategory(category){
    return{
        type:SET_CATEGORY,
        payload:category
    }
}