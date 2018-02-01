import {
  take,
  call,
  put,
  fork,
  cancel
} from 'redux-saga/effects';
import axios from 'axios';

import {parseResponseErrors} from 'utils/errors';
import {
  getAuthToken,
  setAuthToken,
  deleteAuthToken
} from 'configs/local-storage';
import {
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  loginError,
  loginSuccess
} from 'actions';

export const requestLogin = data => {
  const config = {
    'Content-Type': 'application/json'
  };
  const url = `${process.env.REACT_APP_BASE_AUTH_URL}/api/v1/authentication/admin/login/`;

  return axios.post(url, data, config);
};

export const requestLogout = token => {
  const config = {
    'Content-Type': 'application/json',
    Authorization: `JWT ${token}`
  };
  const url = `${process.env.REACT_APP_BASE_AUTH_URL}/api/v1/authentication/admin/logout/`;

  return axios.post(url, {}, {headers: config});
};

function* loginFlow() {
  while (true) {
    const {credentials} = yield take(LOGIN_REQUEST)

    const task = yield fork(authenticate, credentials);
    const action = yield take([LOGOUT_REQUEST, LOGIN_ERROR])
    if (action.type === 'LOGOUT_REQUEST')
      yield cancel(task)
    yield call(signout);
  }
}

function* authenticate(credentials) {
  try {
    const {data: { token, me }} = yield call(requestLogin, credentials);

    yield call(setAuthToken, { token })
    yield put(loginSuccess(me))

  } catch (error) {
    let errorMessage = '';

    if (error.response) {
      errorMessage = parseResponseErrors(error.response);
    } else {
      errorMessage = [error.toString()];
    }

    yield put(loginError(errorMessage));
  }
}

function* signout() {
  try {
    const { token } = getAuthToken
    if ( token ) {
    requestLogout(token)
  }
    deleteAuthToken()
    yield put({ type: 'LOGOUT_SUCCESS' })
  } catch (err) {
    yield put(LOGIN_ERROR)
  }
}

export default loginFlow;
