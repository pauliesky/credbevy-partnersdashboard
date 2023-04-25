export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const CREATE_USER_START = 'CREATE_USER_START'
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE'

export const loginSuccess = (user) => {
  return { type: LOGIN_SUCCESS, payload: user }
};

export const loginFailure = (error) => {
  return { type: LOGIN_FAILURE, payload: error }
};

export const logoutSuccess = (user) => {
  return { type: LOGIN_SUCCESS }
};

export const logoutFailure = (error) => {
  return { type: LOGIN_FAILURE, payload: error }
};

export const createUserStart = () => {
  return { type: CREATE_USER_START }
}

export const createUserSuccess = (partnerUser) => {
  return { type: CREATE_USER_SUCCESS, payload: partnerUser }
}

export const createUserFailure = (error) => {
  return { type: CREATE_USER_FAILURE, payload: error }
}