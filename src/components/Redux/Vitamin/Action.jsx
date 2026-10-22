import { SET_VITAMIN } from "./ActionTypes";
export function setVitamin(vitamin){
    return{
        type:SET_VITAMIN,
        payload:vitamin
    }
}