import { combineReducers } from 'redux'
import { reducer } from 'redux-form'
import { reducer as uiReducer } from 'redux-ui'

const rootReducer = combineReducers({
  form: reducer,
  ui: uiReducer,
})

export default rootReducer
