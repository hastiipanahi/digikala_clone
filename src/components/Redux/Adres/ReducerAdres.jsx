import { SET_ADRES } from "./ActionTypes";
const initialstate={
    adres:[]
}
const ReducerAdres=(state=initialstate,action)=>{
    switch(action.type){
        case SET_ADRES:{
            return{...state,adres:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerAdres