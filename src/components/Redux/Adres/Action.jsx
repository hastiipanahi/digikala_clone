import { SET_ADRES } from "./ActionTypes";
export function setAdres(adres){
    return{
        type:SET_ADRES,
        payload:adres
    }
}