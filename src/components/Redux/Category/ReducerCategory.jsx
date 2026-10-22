import { SET_CATEGORY } from "./ActionTypes";
const initialstate={
    category:[]
}
const ReducerCategory=(state=initialstate,action)=>{
    switch(action.type){
        case SET_CATEGORY:{
            return{...state,category:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerCategory