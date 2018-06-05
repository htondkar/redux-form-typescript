import * as React from 'react'
import Page from 'Components/Page/Page'
import ContactForm from './Pages/ContactForm/ContanctFormContainer'

class App extends React.Component {
  render() {
    return (
      <Page>
        <ContactForm />
      </Page>
    )
  }
}

export default App
