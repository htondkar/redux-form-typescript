import * as React from 'react'
import FormField from 'Components/Forms/Field/FormField'

const TextInput = props => (
  <FormField {...props}>{inputProps => <input type="text" {...inputProps} />}</FormField>
)

export default TextInput
