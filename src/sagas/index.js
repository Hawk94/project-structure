import { fork, all } from 'redux-saga/effects'

import loginFlow from './auth'

function* rootSaga() {
  yield all([loginFlow].map(fork))
}

export default rootSaga
