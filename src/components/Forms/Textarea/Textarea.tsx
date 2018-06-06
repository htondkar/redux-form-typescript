import * as React from 'react'
import FormField from 'Components/Forms/Field/FormField'

const Textarea = props => (
  <FormField {...props}>{inputProps => <textarea {...inputProps} />}</FormField>
)

export default Textarea
