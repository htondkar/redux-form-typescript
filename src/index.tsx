import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import mainStore from 'Store/mainStore'

import App from './App'
import './styles/index.sass'

ReactDOM.render(
  <Provider store={mainStore}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
