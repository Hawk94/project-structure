import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import { guid } from 'helpers/utils'

const TOAST_DELAY = 2000

// Actions
export const TOAST_ADD = 'TOAST_ADD'
export const TOAST_HIDE = 'TOAST_HIDE'

// Reducer
export const toastsReducer = (state = [], action) => {
  switch (action.type) {
    case TOAST_ADD:
      return [...state, action.payload]
    case TOAST_HIDE:
      return state.map((toast, index) => {
        if (toast.id === action.payload) {
          return Object.assign({}, toast, {
            isVisible: false
          })
        }
        return toast
      })
    default:
      return state
  }
}

//Saga
export function* watchHideToast() {
  yield takeEvery(TOAST_ADD, hideToasts)
}

function* hideToasts(action) {
  yield call(delay, TOAST_DELAY)
  yield put(hideToast(action.payload.id))
}

//Action Creators
export const createToast = ({ text }) => {
  const id = guid()
  return {
    type: TOAST_ADD,
    payload: {
      id,
      text,
      isVisible: true
    }
  }
}

export const hideToast = payload => ({
  type: TOAST_HIDE,
  payload
})
