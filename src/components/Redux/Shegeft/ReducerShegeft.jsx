import { SET_SHEGEFT } from "./ActionTypes";
const initialstate={
    shegeft:[]
}
const ReducerShegeft=(state=initialstate,action)=>{
    switch(action.type){
        case SET_SHEGEFT:{
            return{...state,shegeft:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerShegeft