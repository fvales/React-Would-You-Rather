export default function questionsReducer(state = [], action) {
  switch (action.type) {
    case "RECEIVE_QUESTIONS":
      return { ...state, ...action.questions };
    case "ADD_QUESTION":
      const { question } = action;
      return {
        ...state,
        [question.id]: question
      };
    case "ADD_USER_ANSWER_TO_QUESTION":
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      };
    default:
      return state;
  }
}
