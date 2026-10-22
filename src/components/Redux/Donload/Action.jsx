import { SET_DONLOAD } from "./ActionTypes";
export function setDonload(donload){
    return{
        type:SET_DONLOAD,
        payload:donload
    }
}