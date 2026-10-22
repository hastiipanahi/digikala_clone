import { SET_SLIDER } from "./ActionTypes";
const initialstate={
    slider:[]
}
const ReducerSlider=(state=initialstate,action)=>{
    switch(action.type){
        case SET_SLIDER:{
            return{...state,slider:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerSlider