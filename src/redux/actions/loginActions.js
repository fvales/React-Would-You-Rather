export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOG_OUT = "LOG_OUT";

export function setAuthedUser(authedUserId) {
  return { type: SET_AUTHED_USER, authedUserId };
}

export function logout() {
  return { type: LOG_OUT };
}
