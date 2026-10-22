import { SET_PICTURE } from "./ActionTypes";
export function setPicture(picture){
    return{
        type:SET_PICTURE,
        payload:picture
    }
}