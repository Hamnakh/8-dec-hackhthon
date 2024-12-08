import React from 'react'
import Links from 'next/link'
import Navbar from '../app/components/Navbar'

 import Hero from '../app/components/hero'
 import Home from '@/app/components/home'
 import Border from '@/app/components/border'
 import Arrival from '@/app/components/arrival'
import Selling from '@/app/components/selling'

import Customer from '../app/components/customer'
import Footer from '@/app/components/footer'
//import Product from '../app/product'

export default function page() {
  return (
    <div>
      {/* <Link href={"/product"}>
      <li>product</li></Link> */}
      {/* < Product /> */}
     <Navbar />
      <Hero />
      <Border />
      <Arrival />
      <Selling />
      <Home />
      <Customer />
      <Footer />
      {/* <Product /> */}
    </div>
  )
}