import './contact-form-container.sass'

import * as classnames from 'classnames'
import * as React from 'react'
import { Field, InjectedFormProps, reduxForm, WrappedFieldProps } from 'redux-form'
import { email, length, required } from 'redux-form-validators'
import Button from '../../components/Button/Button'

type ContactFormProps = InjectedFormProps<formDataFormat> & {
  onSubmit?: (values: formDataFormat) => void
}

export type formDataFormat = {
  name: string
  email: string
  message: string
}

type fieldRenderer = (
  props: WrappedFieldProps & { title: string; autoFocus?: boolean }
) => JSX.Element

class ContactForm extends React.Component<ContactFormProps, never> {
  onSubmit = (values: formDataFormat) => {
    if (!this.props.onSubmit) {
      return
    }

    this.props.onSubmit(values)
  }

  renderTextInput: fieldRenderer = props => {
    const { title, input, meta, ...rest } = props
    const showError = meta.touched

    const className = classnames('field-row', {
      focused: meta.active,
      'has-errors': Boolean(showError && meta.error),
    })

    return (
      <div className={className}>
        <div className="field-title">{props.title}</div>
        <input className="field-input" {...input} {...rest} />
        <div className="field-error">{showError && meta.error}</div>
      </div>
    )
  }

  renderTextArea: fieldRenderer = props => {
    const { title, input, meta, ...rest } = props

    const showError = meta.touched

    const className = classnames('field-row', {
      focused: meta.active,
      'has-errors': Boolean(showError && meta.error),
    })

    return (
      <div className={className}>
        <div className="field-title">{props.title}</div>
        <textarea className="field-input" {...input} {...rest} rows={4} />
        <div className="field-error">{showError && meta.error}</div>
      </div>
    )
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
            component={this.renderTextInput}
            validate={[required(), length({ min: 3 })]}
            autoFocus={true}
          />

          <Field
            name="email"
            title="Email"
            component={this.renderTextInput}
            validate={[required(), email()]}
          />

          <Field
            name="message"
            title="Your Message"
            component={this.renderTextArea}
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

const formStateProvider = reduxForm<formDataFormat>({ form: 'contact-form' })

export default formStateProvider(ContactForm)
