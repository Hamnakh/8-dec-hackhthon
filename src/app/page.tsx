import React from 'react'
import Links from 'next/link'
// import Navbar from '../app/components/Navbar'
import Hero from '../app/components/hero'
import Home from '@/app/components/home'
import Border from '@/app/components/border'
import Product from './products/[id]/page1'
import Top_sell from './products/sell'
// import Reviews from './reviews/reviews'
import Customer from '../app/components/customer'
// import Footer from '@/app/components/footer'
import Products from './products/[id]/page1'
//import Causal from '../app/causal'

export default function page() {
  return (
    <div>
      {/* <Link href={"/product"}>
      <li>product</li></Link> */}
      {/* < Product /> */}
      {/* <Navbar /> */}
      <Hero />
      <Border />
      <Product />
      <Top_sell />
      <Home />
      <Customer />
      {/* < Reviews /> */}
    </div>
  )
}