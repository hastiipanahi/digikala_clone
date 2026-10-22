import { SET_PICTURE } from "./ActionTypes";
const initialstate={
    picture:[]
}
const ReducerPicture=(state=initialstate,action)=>{
    switch(action.type){
        case SET_PICTURE:{
            return{...state,picture:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerPicture