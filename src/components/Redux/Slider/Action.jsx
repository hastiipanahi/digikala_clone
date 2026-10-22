import { SET_SLIDER } from "./ActionTypes";
export function setSlider(slider){
    return{
        type:SET_SLIDER,
        payload:slider
    }
}