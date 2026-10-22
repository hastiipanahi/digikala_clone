import { SET_VITAMINMOBILE } from "./ActionTypes";
const initialstate={
    vitaminmobile:[]
}
const ReducerVitaminmobile=(state=initialstate,action)=>{
    switch(action.type){
        case SET_VITAMINMOBILE:{
            return{...state,vitaminmobile:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerVitaminmobile