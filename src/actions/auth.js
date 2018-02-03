export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'

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
