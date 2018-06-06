import * as React from 'react'
import { connect } from 'react-redux'
import ContactForm, { contactFormDataFormat } from './ContactForm'
import { submitContactForm } from 'actionCreators/contact.actionCreator'
import { IAppState } from 'Store/AppState.interface'

type dispatchProps = {
  submitContactForm: (values: contactFormDataFormat) => Promise<void>
}

type storeProps = {
  contact: IAppState['contact']
}

type ContactFormContainerProps = dispatchProps & storeProps

class ContactFormContainer extends React.Component<ContactFormContainerProps, never> {
  onSubmit = (values: contactFormDataFormat) => {
    this.props.submitContactForm(values)
  }

  render() {
    return (
      <ContactForm
        onSubmit={this.onSubmit}
        isSubmitting={this.props.contact.isLoading}
        messages={this.props.contact.messages}
      />
    )
  }
}

const mapStateToProps = ({ contact }) => ({ contact })

const mappedActions = dispatch => ({
  submitContactForm: values => dispatch(submitContactForm(values)),
})

export default connect<storeProps, dispatchProps, {}, never>(
  mapStateToProps,
  mappedActions
)(ContactFormContainer)
