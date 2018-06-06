import * as React from 'react'
import * as classnames from 'classnames'

import './form-field.sass'

const FormField = ({ children, title, input, meta, ...rest }) => {
  const showError = meta.touched

  const className = classnames('field', {
    focused: meta.active,
    'has-errors': Boolean(showError && meta.error),
  })

  const childProps = {
    className: 'field-input',
    ...input,
    ...rest,
  }

  return (
    <div className={className}>
      <div className="field-title">{title}</div>
      {children(childProps)}
      <div className="field-error">{showError && meta.error}</div>
    </div>
  )
}

export default FormField
