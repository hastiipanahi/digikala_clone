import { SET_LOGO } from "./ActionTypes";
export function setLogo(logo){
    return{
        type:SET_LOGO,
        payload:logo
    }
}