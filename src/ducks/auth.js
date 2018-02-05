import { take, call, put, fork, cancel } from 'redux-saga/effects'

import { getAuthToken, setAuthToken, deleteAuthToken } from 'configs/local-storage'
import { requestLogin, requestLogout } from 'sdk/auth'
import { parseResponseErrors } from 'helpers/errors'

// Actions
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'

// Reducer
const initialState = {
  errors: [],
  isLoading: false,
  isSignedIn: false,
  me: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: action.meta.isLoading,
        isSignedIn: action.meta.isSignedIn,
        errors: action.payload
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        me: action.payload,
        isLoading: action.meta.isLoading,
        isSignedIn: action.meta.isSignedIn,
        errors: []
      }
    default:
      return state
  }
}

//Sagas
export function* loginFlow() {
  while (true) {
    const { payload } = yield take(LOGIN_REQUEST)

    const task = yield fork(authenticate, payload)
    const action = yield take([LOGOUT_REQUEST, LOGIN_ERROR])
    if (action.type === 'LOGOUT_REQUEST') yield cancel(task)
    yield call(signout)
  }
}

function* authenticate(credentials) {
  try {
    const { data: { token, me } } = yield call(requestLogin, credentials)

    yield call(setAuthToken, { token })
    yield put(loginSuccess(me))
  } catch (error) {
    let errorMessage = ''

    if (error.response) {
      errorMessage = parseResponseErrors(error.response)
    } else {
      errorMessage = [error.toString()]
    }

    yield put(loginError(errorMessage))
  }
}

function* signout() {
  try {
    const { token } = getAuthToken
    if (token) {
      requestLogout(token)
    }
    deleteAuthToken()
    yield put({ type: 'LOGOUT_SUCCESS' })
  } catch (err) {
    yield put(LOGIN_ERROR)
  }
}

//Action Creators
export const loginRequest = payload => {
  return {
    type: LOGIN_REQUEST,
    meta: {
      isSignedIn: false,
      isLoading: true
    },
    payload
  }
}

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST,
    meta: {
      isSignedIn: false,
      isLoading: true
    }
  }
}

export const loginError = payload => {
  return {
    type: LOGIN_ERROR,
    meta: {
      isSignedIn: false,
      isLoading: true
    },
    payload
  }
}

export const loginSuccess = payload => {
  return {
    type: LOGIN_SUCCESS,
    meta: {
      isSignedIn: false,
      isLoading: true
    },
    payload
  }
}
