import * as React from 'react'
import { Field, InjectedFormProps, reduxForm, FormSubmitHandler } from 'redux-form'
import { email, length, required } from 'redux-form-validators'

import Button from 'Components/Button/Button'
import TextInput from 'Components/Forms/TextInput/TextInput'
import Textarea from 'Components/Forms/Textarea/Textarea'

import './contact-form-container.sass'

//
// ─── TYPES ──────────────────────────────────────────────────────────────────────
//

type ownProps = {
  onSubmit: FormSubmitHandler
  isSubmitting?: boolean
  messages?: string | string[]
}

type propsType = InjectedFormProps<contactFormDataFormat, ownProps> & ownProps

export type contactFormDataFormat = {
  name: string
  email: string
  messages: string
}

// ────────────────────────────────────────────────────────────────────────────────

const ContactForm: React.SFC<propsType> = ({
  onSubmit,
  handleSubmit,
  messages,
  isSubmitting = false,
}) => (
  <section className="form-wrapper">
    <h4 className="form-wrapper__title">Contact Us</h4>

    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <Field
        name="name"
        title="Name"
        component={TextInput}
        validate={[required(), length({ min: 3 })]}
        autoFocus={true}
        disabled={isSubmitting}
      />

      <Field
        name="email"
        title="Email"
        component={TextInput}
        validate={[required(), email()]}
        disabled={isSubmitting}
      />

      <Field
        name="message"
        title="Your Message"
        component={Textarea}
        validate={[required(), length({ min: 5 })]}
        disabled={isSubmitting}
      />

      <div className="form-action-wrapper">
        <Button
          text="Send"
          type="submit"
          disabled={isSubmitting}
          data-test-class="action-button"
          loading={isSubmitting}
        />
      </div>

      {messages && <div className="form-messages">{messages}</div>}
    </form>
  </section>
)

export default reduxForm<contactFormDataFormat, ownProps>({ form: 'contact-form' })(
  ContactForm
)
