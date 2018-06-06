import * as React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { email, length, required } from 'redux-form-validators'

import Button from 'Components/Button/Button'
import TextInput from 'Components/Forms/TextInput/TextInput'
import Textarea from 'Components/Forms/Textarea/Textarea'

import './contact-form-container.sass'

//
// ─── TYPES ──────────────────────────────────────────────────────────────────────
//

type ContactFormProps = InjectedFormProps<formDataFormat> & {
  onSubmit?: (values: formDataFormat) => void
}

export type formDataFormat = {
  name: string
  email: string
  message: string
}

// ────────────────────────────────────────────────────────────────────────────────

class ContactForm extends React.Component<ContactFormProps, never> {
  onSubmit = (values: formDataFormat) => {
    if (!this.props.onSubmit) {
      return
    }

    this.props.onSubmit(values)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <section className="form-wrapper">
        <h4 className="form-wrapper__title">Contact Us</h4>

        <form onSubmit={handleSubmit(this.onSubmit)} className="form">
          <Field
            name="name"
            title="Name"
            component={TextInput}
            validate={[required(), length({ min: 3 })]}
            autoFocus={true}
          />

          <Field
            name="email"
            title="Email"
            component={TextInput}
            validate={[required(), email()]}
          />

          <Field
            name="message"
            title="Your Message"
            component={Textarea}
            validate={[required(), length({ min: 5 })]}
          />

          <div className="form-action-wrapper">
            <Button text="Send" type="submit" disabled={false} />
          </div>
        </form>
      </section>
    )
  }
}

export default reduxForm<formDataFormat>({ form: 'contact-form' })(ContactForm)
