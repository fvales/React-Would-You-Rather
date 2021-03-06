export default function usersReducer(state = [], action) {
  switch (action.type) {
    case "RECEIVE_USERS":
      return { ...state, ...action.users };
    case "ADD_QUESTION_TO_USER":
      const { question } = action;
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: [...state[question.author].questions, question.id]
        }
      };
    case "ADD_ANSWER_TO_USER":
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      };
    default:
      return state;
  }
}
