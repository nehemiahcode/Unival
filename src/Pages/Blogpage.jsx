import React from 'react'
import { NavLink } from 'react-router-dom'
function Blogpage() {
  return (
    <div className='fixed w-full h-screen bg-white flex justify-center pt-10'>
           <div className='flex flex-col  items-center'>
           <h1 className=' font-medium text-3xl text-black'>404 Not found</h1>
           <span className="material-symbols-outlined text-5xl text-black py-4 animate-bounce">
           construction
            </span>
            <h1 className=' text-black font-medium text-2xl capitalize pt-5'>Still under development</h1>
          <NavLink to="/about"><button  className=' text-white px-4 py-2 w-[200px] bg-slate-800 mt-2 font-medium'>Go back</button></NavLink>
           </div>
    </div>
  )
}

export default Blogpage