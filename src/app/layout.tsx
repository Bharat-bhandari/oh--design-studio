
import React from 'react'

import "./globals.css"

const MainLayout = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <html>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

export default MainLayout