import { SET_MENU } from "./ActionTypes";


export function setMenu(menu){
    return{
        type:SET_MENU,
        payload:menu
    }
}
