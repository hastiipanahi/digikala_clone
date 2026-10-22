import { SET_VITAMIN } from "./ActionTypes";
const initialstate={
    vitamin:[]
}
const ReducerVitamin=(state=initialstate,action)=>{
    switch(action.type){
        case SET_VITAMIN:{
            return{...state,vitamin:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerVitamin