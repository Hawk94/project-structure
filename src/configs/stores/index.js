import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from 'reducers'
import rootSaga from 'sagas'

export const configureStore = () => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

  // run saga
  sagaMiddleware.run(rootSaga, store)
  return store
}
