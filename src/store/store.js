import { createStore, combineReducers } from 'redux'
import appReducer from './reducer'
import { isClient } from '../../base/utils'

const reducer = combineReducers({
  app: appReducer,
})

const store = createStore(
  reducer,
  isClient &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
