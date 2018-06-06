import * as React from 'react'
import FormField from 'Components/Forms/Field/FormField'

const TextInput = props => {
  return (
    <FormField {...props}>
      <input type="text" />
    </FormField>
  )
}

export default TextInput
