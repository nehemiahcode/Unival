import React from 'react'
import { Cards } from '../Sections/SecondSection'
import Mainlayout from '../NavbarWrapper'
import { FeaturedCourses } from '../Sections/SecondSection'
function Aboutpage() {
  return (
    <Mainlayout>
        <div className=' w-full h-[400px] grid place-items-center  bg-indigo-900' style={{backgroundImage:"url(https://plus.unsplash.com/premium_photo-1661768633063-7f93a765ed82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHRlYWNoZXJzJTIwaW4lMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60)",
         backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundAttachment:"fixed" , backgroundBlendMode:"multiply"}}>
           <h1 className=' font-bold text-4xl text-white lg:text-5xl'> ABOUT US</h1>
        </div>
        <FeaturedCourses/>
        <Cards/>
    </Mainlayout>
  )
}

export default Aboutpage