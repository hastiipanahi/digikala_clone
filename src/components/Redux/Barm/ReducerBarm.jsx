import { SET_BARM } from "./ActionTypes";
const initialstate={
    barm:[]
}
const ReducerBarm=(state=initialstate,action)=>{
    switch(action.type){
        case SET_BARM:{
            return{...state,barm:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerBarm