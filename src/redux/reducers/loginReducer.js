export default function loginReducer(state = [], action) {
  switch (action.type) {
    case "SET_USER":
      return [...state, { ...action.user }];
    case "SET_AUTH_FLAG":
      return [...state, { ...action.flag }];
    default:
      return state;
  }
}
