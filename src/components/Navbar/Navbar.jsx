import React from 'react'
import logo from './logo.png'
function Navbar() {
    return (
       <div className='flex items-center justify-center class="relative  w-full flex-wrap  bg-neutral-700 py-3 text-neutral-200 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-700">'>
        <div className=' px-6'>
          <h1 
            className='text-2xl font-bold text-white uppercase tracking-wider'
          >Nombre Local</h1>
        </div>
       </div>
                                
    )
}

export default Navbar
{/* <p className='pr-2 text-xl font-semibold text-white'>La Pizzeria</p> */}