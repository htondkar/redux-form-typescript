import { combineReducers } from 'redux'
import { reducer } from 'redux-form'
import contact from './contact.reducer'
import { IAppState } from '../store/AppState.interface'

export interface IAction<T> {
  type: string
  payload?: T
}

export interface IActionHandlers<T> {
  [key: string]: (state: T, action: IAction<T>) => T
}

const rootReducer = combineReducers<IAppState>({
  form: reducer,
  contact,
})

export default rootReducer
