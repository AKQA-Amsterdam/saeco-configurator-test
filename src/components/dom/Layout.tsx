
// @ts-nocheck

import { useRef, forwardRef } from 'react'
import { mergeRefs } from 'react-merge-refs'

const Layout = forwardRef(({ children, ...props }, ref) => {
  const localRef = useRef()
  return (
    <div
      ref={mergeRefs([ref, localRef])}
      // className='absolute top-0 left-0 flex w-screen h-screen dom text-gray-50'>
      className='absolute top-0 left-0 z-50 flex w-full h-full dom'>
      {children}
    </div>
  )
})

Layout.displayName = 'Layout'

export default Layout
