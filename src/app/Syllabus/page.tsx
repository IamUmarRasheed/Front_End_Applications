import Home from '@/components/Home'
import Bannerpage from '@/views/contactPage'
import Contactpage from '@/views/contactPage'
import Bannerabout from '@/views/contactPage/sections/Bannerabout'
import Banner from '@/views/home/Banner'
import React from 'react'

export default function page() {
  return (
   <>
   <Home src="/web3.png" alt="hello" />
   <Bannerpage/>
   </>
  )
}
