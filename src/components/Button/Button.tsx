import * as React from 'react'

import './button.sass'
import Spinner from 'Components/spinner/Spinner'

type ButtonProps = {
  type: 'submit' | 'button'
  text: string | JSX.Element
  disabled: boolean
  onClick?: (event: any) => void
  loading?: boolean
}

const Button: React.SFC<ButtonProps> = ({ text, type, onClick, disabled, loading }) => {
  return (
    <button className="button" type={type} onClick={onClick} disabled={disabled}>
      {loading ? <Spinner /> : text}
    </button>
  )
}

export default Button
