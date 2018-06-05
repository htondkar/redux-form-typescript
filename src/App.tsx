import * as React from 'react'
import Page from 'Components/Page/Page'
import ContactFormContainer from './Pages/ContactForm/ContanctFormContainer'

class App extends React.Component {
  render() {
    return (
      <Page>
        <ContactFormContainer />
      </Page>
    )
  }
}

export default App
