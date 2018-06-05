import * as React from 'react'

import './form.sass'

type FormProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const Form: React.SFC<FormProps> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} action="POST" className="form">
      {children}
    </form>
  )
}

export default Form
