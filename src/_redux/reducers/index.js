import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGOUT_FAILURE, CREATE_USER_START, CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from "../../_actions";

const initialState = {
  partnerUser: null,
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
    case CREATE_USER_START:
      return { ...state }
    case CREATE_USER_SUCCESS:
      return { ...state, partnerUser: action.payload, error: null };
    case CREATE_USER_FAILURE:
      return { ...state, partnerUser: null, error: action.payload }
    default:
      return state;
  }
};