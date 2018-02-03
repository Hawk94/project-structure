import { fork, all } from 'redux-saga/effects'

import loginFlow from './auth'
import watchHideToast from './toasts'

function* rootSaga() {
  yield all([
    loginFlow,
    watchHideToast
  ].map(fork))
}

export default rootSaga
