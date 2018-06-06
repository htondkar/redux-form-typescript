import contactActionsTypes from 'ActionsTypes/contact.actions'
import api from 'api/api'
import { handleResponse } from 'api/util'
import { contactFormDataFormat } from 'Pages/ContactForm/ContactForm'
import { Dispatch } from 'react-redux'

import BaseAction from './base.actionCreator'

const contactActionsCreators = new BaseAction(contactActionsTypes.ACTION_NAME)

export function submitContactForm(formValues: contactFormDataFormat) {
  return async (dispatch: Dispatch) => {
    dispatch(contactActionsCreators.start())

    handleResponse({
      dispatch,
      response: await api.call(formValues),
      onFail: contactActionsCreators.fail,
      onSuccess: contactActionsCreators.success,
    })
  }
}
