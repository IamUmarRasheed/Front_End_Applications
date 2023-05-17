import React, { ReactNode } from 'react'
import { FC } from 'react'

const Wrapper:FC<{children:ReactNode} > = ({children}) => {
  return (
    <div className=' px-10 max-w-full '>
        {children}
    </div>
  )
}

export default Wrapper