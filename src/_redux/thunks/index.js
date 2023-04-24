import { loginSuccess, loginFailure, logoutSuccess, logoutFailure } from "../../_actions";

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://credbevy-env.eba-nsfp43cc.us-east-1.elasticbeanstalk.com/api/partner/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('logged in');
      dispatch(loginSuccess(data.partner));

      console.log(response);
      console.log(data);
    } catch (error) {
      dispatch(loginFailure(error.message))
      console.log(error)
    }
  }
};

export const logout = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      const data = await response.json();
      console.log('logged out');
      dispatch(logoutSuccess());

      console.log(response);
      console.log(data);
    } catch (error) {
      dispatch(logoutFailure(error.message))
      console.log(error)
    }
  }
};