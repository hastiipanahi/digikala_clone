import { SET_SEARCHMO } from "./ActionTypes";
export function setSearchmo(searchmo){
    return{
        type:SET_SEARCHMO,
        payload:searchmo
    }
}