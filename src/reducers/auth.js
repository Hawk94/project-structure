import {LOGIN_ERROR, LOGIN_SUCCESS} from 'actions';

const initialState = {
  loginErrors: [],
  me: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        loginErrors: action.errors
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        me: action.me,
        isSignedIn: true,
        loginErrors: []
      };
    default:
      return state;
  }
};

export default authReducer;
