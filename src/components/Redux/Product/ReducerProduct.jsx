import { SET_PRODUCT } from "./ActionTypes";
const initialstate={
    product:[]
}
const ReducerProduct=(state=initialstate,action)=>{
    switch(action.type){
        case SET_PRODUCT:{
            return{...state,product:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerProduct