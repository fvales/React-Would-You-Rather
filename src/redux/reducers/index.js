import { combineReducers } from "redux";
import authedUser from "./loginReducer";
import users from "./usersReducer";
import questions from "./questionsReducer";

const rootReducer = combineReducers({
  authedUser,
  users,
  questions
});

export default rootReducer;
