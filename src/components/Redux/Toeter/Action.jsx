import { SET_TOETER } from "./ActionTypes";
export function setToeter(toeter){
    return{
        type:SET_TOETER,
        payload:toeter
    }
}