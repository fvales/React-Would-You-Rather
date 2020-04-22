import { _saveQuestion } from "../../utils/_DATA";
import { addQuestionToUser } from "./usersAction";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return { type: RECEIVE_QUESTIONS, questions };
}

export function addQuestion(question) {
  return { type: ADD_QUESTION, question };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestion({
      optionOneText: optionOneText,
      optionTwoText: optionTwoText,
      author: authedUser
    }).then(q => {
      dispatch(addQuestion(q));
      dispatch(addQuestionToUser(q));
    });
  };
}
