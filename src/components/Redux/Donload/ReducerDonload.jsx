import { SET_DONLOAD } from "./ActionTypes";
const initialstate={
    donload:[]
}
const ReducerDonload=(state=initialstate,action)=>{
    switch(action.type){
        case SET_DONLOAD:{
            return {...state,donload:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerDonload