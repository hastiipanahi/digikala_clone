import { SET_ADRESMOBILE } from "./ActionTypes";
const initialstate={
    adresmobile:[]
}
const ReducerAdresmobile=(state=initialstate,action)=>{
    switch(action.type){
        case SET_ADRESMOBILE:{
            return{...state,adresmobile:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerAdresmobile