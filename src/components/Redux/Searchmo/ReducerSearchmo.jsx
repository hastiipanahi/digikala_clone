
import { SET_SEARCHMO } from "./ActionTypes";
const initialstate={
    searchmo:[]
}
const ReducerSearchmo=(state=initialstate,action)=>{
    switch(action.type){
        case SET_SEARCHMO:{
            return{...state,searchmo:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerSearchmo