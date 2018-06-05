import * as React from 'react'

import './page.sass'

const Page: React.SFC<{}> = ({ children }) => {
  return <main className="page">{children}</main>
}

export default Page
