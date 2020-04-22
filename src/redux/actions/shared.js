import { getInitialData } from "../../utils/api";
import { receiveUsers } from "../actions/usersAction";
import { receiveQuestions } from "../actions/questionsAction";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
