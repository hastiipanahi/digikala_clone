import { SET_MENU } from "./ActionTypes"

const initialstate={
    menu:[]
}
const ReducerMenu=(state=initialstate,action)=>{
    switch(action.type){
        case SET_MENU:{
            return{...state,menu:action.payload}
        }
        default:{
            return state
        }
    }
}
export default ReducerMenu