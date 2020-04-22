export default function loginReducer(state = null, action) {
  switch (action.type) {
    case "SET_AUTHED_USER":
      return action.authedUserId;
    case "LOG_OUT":
      return null;
    default:
      return state;
  }
}
