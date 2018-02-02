import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import auth from './auth'
import toasts from './toasts'

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
