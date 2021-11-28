import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

export default function configureStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk, createLogger()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}
