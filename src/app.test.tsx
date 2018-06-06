import 'jest'
import * as React from 'react'
import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import App from './App'
import mainStore from 'Store/mainStore'
import { Provider } from 'react-redux'

Enzyme.configure({ adapter: new Adapter() })
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe('Contact form', () => {
  it('renders without crashing', async () => {
    const wrapper = Enzyme.mount(
      <Provider store={mainStore}>
        <App />
      </Provider>
    )

    const title = wrapper.find('.form-wrapper__title')
    expect(title.text()).toBe('Contact Us')
  })

  it('submits when clicked on button', done => {
    const wrapper = Enzyme.mount(
      <Provider store={mainStore}>
        <App />
      </Provider>
    )

    const actionButton = wrapper.find('form')
    actionButton.simulate('submit')

    setTimeout(() => {
      const messages = wrapper.find('.form-messages')
      expect(messages.length).toBe(1)
      expect(messages.text()).toContain('success')
      done()
    }, 2000)
  })
})
