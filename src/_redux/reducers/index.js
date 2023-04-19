import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "../../_actions";

const initialState = {
  currentUser: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, currentUser: action.payload, error: null };
    case LOGIN_FAILURE:
      return { ...state, currentUser: null, error: action.payload };
    case LOGOUT_SUCCESS:
      return { ...state, currentUser: null, error: null };
    case LOGOUT_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};