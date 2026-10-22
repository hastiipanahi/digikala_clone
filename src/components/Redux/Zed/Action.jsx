import { SET_ZED } from "./ActionTypes";
export function setZed(zed){
    return{
        type:SET_ZED,
        payload:zed
    }
}