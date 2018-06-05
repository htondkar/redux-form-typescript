import './flex-container.sass'

import * as cls from 'classnames'
import * as React from 'react'

type FlexContainerProps = { direction?: 'column' | 'row' }
type componentType = React.SFC<FlexContainerProps>

const FlexContainer: componentType = ({ children, direction = 'row', ...rest }) => {
  const className = cls('flex-container', {
    vertical: direction === 'column',
  })

  return (
    <section {...rest} className={className}>
      {children}
    </section>
  )
}

export default FlexContainer
