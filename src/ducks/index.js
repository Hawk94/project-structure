import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { authReducer as auth, loginFlow } from './auth'
import { toastsReducer as toasts, watchHideToast } from './toasts'
import { fork, all } from 'redux-saga/effects'

export function* rootSaga() {
  yield all([
    loginFlow,
    watchHideToast
  ].map(fork))
}

const appReducer = combineReducers({
  form,
  auth,
  toasts
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_REQUEST') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
