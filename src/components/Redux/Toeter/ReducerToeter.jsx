import { SET_TOETER } from "./ActionTypes";
const initialstate={
    toeter:[]
}
const ReducerToeter=(state=initialstate,action)=>{
    switch(action.type){
        case SET_TOETER:{
            return{...state,toeter:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerToeter