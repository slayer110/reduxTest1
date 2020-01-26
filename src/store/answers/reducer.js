import {EDIT_TEXT} from "./action";


const defaultState = {
  answers: new Array(5)
};

let Answers = (state = defaultState, action) => {
  switch (action.type) {
    case EDIT_TEXT:
      return {answers: action.payload};
    default:
      return {...state}
  }
  return {...state}
};
export default Answers;
