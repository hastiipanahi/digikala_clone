import { SET_FINAL } from "./ActionTypes";
const initialstate={
    final:[]
}
const ReducerFinal=(state=initialstate,action)=>{
    switch(action.type){
        case SET_FINAL:{
            return {...state,final:action.payload}
        }
        default:{
            return state
        }

    }
}
export default ReducerFinal
