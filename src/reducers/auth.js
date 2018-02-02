import { LOGIN_ERROR, LOGIN_SUCCESS } from 'actions/auth'

const initialState = {
  errors: [],
  isLoading: false,
  isSignedIn: false,
  me: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: action.isLoading,
        isSignedIn: action.isSignedIn,
        errors: action.errors
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        me: action.me,
        isLoading: action.isLoading,
        isSignedIn: action.isSignedIn,
        errors: []
      }
    default:
      return state
  }
}

export default authReducer
