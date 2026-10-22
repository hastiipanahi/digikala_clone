import { SET_FINAL } from "./ActionTypes";
export function setFinal(final){
    return {
      type: SET_FINAL,
      payload: final,
    };
}
