import { loginSuccess, loginFailure, logoutSuccess, logoutFailure, listRolesSuccess, listRolesFailure } from "../../_actions";
import axios from 'axios';
import api from './../../axios/api';


export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await api.post('/api/partner/login', {
        email, password
      });

      const data = response.data;
      localStorage.setItem('access_token', data.access_token);
      console.log('logged in');

      dispatch(loginSuccess(data.access_token));

      console.log(response);
      console.log(data);
    } catch (error) {
      dispatch(loginFailure(error.message))
      // console.log(error)
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
      dispatch(logoutSuccess());

      console.log(response);
      console.log(data);
    } catch (error) {
      dispatch(logoutFailure(error.message))
      console.log(error)
    }
  }
};

export const createUser = (firstName, lastName) => {
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

      dispatch(loginSuccess(data.access_token));

      console.log(response);
      console.log(data);
    } catch (error) {
      dispatch(loginFailure(error.message))
      console.log(error)
    }
  }
};

export const listRoles = () => {
  return async (dispatch) => {
    try {
      const response = await api.get('/api/partner/roles');

      const data = response.data;
      console.log('roles listed');

      dispatch(listRolesSuccess(data.roles));

      // console.log(response);
      // console.log(data);
    }
    catch (error) {
      dispatch(listRolesFailure(error.message))
      console.log(error)
    }
  }
};