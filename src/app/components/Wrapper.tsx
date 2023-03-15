import React, { ReactNode } from 'react'
import { FC } from 'react'

const Wrapper:FC<{children:ReactNode} > = ({children}) => {
  return (
    <div className='  mx-auto md:px-60  max-w-screen-2xl'>
        {children}
    </div>
  )
}

export default Wrapper