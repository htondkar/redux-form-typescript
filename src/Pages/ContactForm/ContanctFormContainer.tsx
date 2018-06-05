import * as React from 'react'
import ContactForm from './ContactForm'
import { formDataFormat } from './ContactForm'

type ContactFormContainerProps = {}

export default class ContactFormContainer extends React.Component<
  ContactFormContainerProps,
  never
> {
  onSubmit = (values: formDataFormat) => {
    console.log(values)
  }

  render() {
    return <ContactForm onSubmit={this.onSubmit} />
  }
}
