export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

export const loginRequest = credentials => {
  return {
    type: LOGIN_REQUEST,
    credentials
  };
};

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

export const loginError = errors => {
  return {
    type: LOGIN_ERROR,
    errors
  };
};

export const loginSuccess = me => {
  return {
    type: LOGIN_SUCCESS,
    me
  };
};
