import { SET_FINALMOBIL } from "./ActionTypes";
const initialstate={
    finalmobile:[]
}
const ReducerFinalmobile=(state=initialstate,action)=>{
    switch(action.type){
        case SET_FINALMOBIL:{
            return{...state,finalmobile:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerFinalmobile