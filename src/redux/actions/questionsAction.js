import { _saveQuestion, _saveQuestionAnswer } from "../../utils/_DATA";
import { addQuestionToUser, addAnswerToUser } from "./usersAction";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_USER_ANSWER_TO_QUESTION = "ADD_USER_ANSWER_TO_QUESTION";

export function receiveQuestions(questions) {
  return { type: RECEIVE_QUESTIONS, questions };
}

export function addQuestion(question) {
  return { type: ADD_QUESTION, question };
}

export function addUserAnswerToQuestion(authedUser, qid, answer) {
  return { type: ADD_USER_ANSWER_TO_QUESTION, authedUser, qid, answer };
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

export function handleAddUserAnswerToQuestion(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestionAnswer({
      qid,
      answer,
      authedUser
    }).then(() => {
      dispatch(addUserAnswerToQuestion(authedUser, qid, answer));
      dispatch(addAnswerToUser(authedUser, qid, answer));
    });
  };
}
