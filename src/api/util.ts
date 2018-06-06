import { IResponse } from './api'
import { Dispatch } from 'react-redux'
import { IAction } from 'reducers'

interface IResponseHandlerObject {
  onSuccess: (data: any) => IAction<any>
  onFail: (errors: any) => IAction<any>
  response: IResponse
  dispatch?: Dispatch
}

type responseHandler = (arg: IResponseHandlerObject) => void

export const handleResponse: responseHandler = ({ onSuccess, onFail, response, dispatch }) => {
  if (response.status === 200) {
    dispatch ? dispatch(onSuccess(response.data)) : onSuccess(response.data)
  }

  if (response.status === 400) {
    dispatch ? dispatch(onFail(response.error)) : onFail(response.error)
  }
}
