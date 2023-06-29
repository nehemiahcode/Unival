import React from 'react'
import Navbar from './Components/Navbar'
import { Footer } from './Sections/SecondSection'
function Mainlayout({children}) {
  return (
  <>
    <Navbar></Navbar>
    <div>{children}</div>
    <Footer/>
  </>
  )
}

export default Mainlayout