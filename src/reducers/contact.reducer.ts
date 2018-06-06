import contactActions from 'ActionsTypes/contact.actions'
import { IAppState } from 'Store/AppState.interface'
import { IAction, IActionHandlers } from './index'
import defaultState from 'Store/defaultState'

type contactState = IAppState['contact']

const actionHandlers: IActionHandlers<contactState> = {
  [`${contactActions.ACTION_NAME}_START`]: (state, __) => ({ ...state, isLoading: true }),
  [`${contactActions.ACTION_NAME}_SUCCESS`]: (state, __) => ({
    ...state,
    isLoading: false,
    messages: 'Your message successfully submitted',
  }),
  [`${contactActions.ACTION_NAME}_FAIL`]: (state, __) => ({
    ...state,
    isLoading: false,
    messages: 'There was an error...',
  }),
}

const contactReducer = (
  state: contactState = defaultState.contact,
  action: IAction<contactState>
): contactState =>
  actionHandlers[action.type] ? actionHandlers[action.type](state, action) : state

export default contactReducer
