import { SET_MEGA } from "./ActionTypes";
const initialstate={
    mega:[]
}
const ReducerMega=(state=initialstate,action)=>{
    switch(action.type){
        case SET_MEGA:{
            return{...state,mega:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerMega