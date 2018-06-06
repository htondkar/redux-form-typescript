import * as React from 'react'
import * as classnames from 'classnames'

const FormField = ({ children, title, input, meta, ...rest }) => {
  const showError = meta.touched

  const className = classnames('field-row', {
    focused: meta.active,
    'has-errors': Boolean(showError && meta.error),
  })

  const inputComponent = React.cloneElement(children, {
    className: 'field-input',
    ...input,
    ...rest,
  })

  return (
    <div className={className}>
      <div className="field-title">{title}</div>
      {inputComponent}
      <div className="field-error">{showError && meta.error}</div>
    </div>
  )
}

export default FormField
