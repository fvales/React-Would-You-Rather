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
      return { ...state };
    default:
      return state;
  }
}
