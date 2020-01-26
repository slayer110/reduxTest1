import {combineReducers} from "redux";
import Questions from "./questions/reducer";
import Answers from "./answers/reducer"

export default combineReducers({
  Questions,
  Answers
});

