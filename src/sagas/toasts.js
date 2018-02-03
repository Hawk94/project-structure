import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'
import { TOAST_ADD, hideToast } from 'actions/toasts'

const TOAST_DELAY = 2000

function* watchHideToast() {
  yield takeEvery(TOAST_ADD, hideToasts)
}

function* hideToasts(action) {
  yield call(delay, TOAST_DELAY)
  yield put(hideToast(action.payload.id))
}

export default watchHideToast