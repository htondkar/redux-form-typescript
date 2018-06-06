import * as React from 'react'

import ContactForm, { formDataFormat } from './ContactForm'

type ContactFormContainerProps = {}

class ContactFormContainer extends React.Component<ContactFormContainerProps, never> {
  onSubmit = (values: formDataFormat) => {
    console.log(values)
  }

  render() {
    return <ContactForm onSubmit={this.onSubmit} />
  }
}

export default ContactFormContainer
