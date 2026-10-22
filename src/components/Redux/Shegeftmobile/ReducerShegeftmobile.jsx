import { SET_SHEGEFTMOBILE } from "./ActionTypes";
const initialstate={
    shegeftmobile:[]
}
const ReducerShegeftmobile=(state=initialstate,action)=>{
    switch(action.type){
        case SET_SHEGEFTMOBILE:{
            return{...state,shegeftmobile:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerShegeftmobile