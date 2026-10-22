import { SET_ZED } from "./ActionTypes";
const initialstate={
    zed:[]
}
const ReducerZed=(state=initialstate,action)=>{
    switch(action.type){
        case SET_ZED:{
            return{...state,zed:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerZed