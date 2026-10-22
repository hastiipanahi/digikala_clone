import { SET_LOGO } from "./ActionTypes";
const initialstate={
    logo:[]
}
const ReducerLogo=(state=initialstate,action)=>{
    switch(action.type){
        case SET_LOGO:{
            return{...state,logo:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerLogo