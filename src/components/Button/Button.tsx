import * as React from 'react'

import './button.sass'

type ButtonProps = {
  type: 'submit' | 'button'
  text: string | JSX.Element
  disabled: boolean
  onClick?: (event: any) => void
}

const Button: React.SFC<ButtonProps> = ({ text, type, onClick, disabled }) => {
  return (
    <button className="button" type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

export default Button
