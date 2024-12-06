import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-black  text-blue-100 py-4 px-3 flex justify-between items-center border-2 border-yellow-400 sm:rounded-sm md:rounded-md
       shadow-yellow-100 shadow-inner  h-6 sm:h-11 md:h-12 lg:h-[50px] '>
 <div>
    <img src="/name-logo.png " alt="Logo"  className='h-[29px] w-[85px] lg:h-10 lg:w-32 hidden sm:flex'/>
 </div>

 <div>
    <ul className='flex items-center justify-around space-x-2  sm:space-x-5 md:space-x-7 lg:space-x-12'>
 <li><Link href="/" className='hover:text-yellow-400 text-[15px] sm:text-[19px] md:text-[21px] lg:text-[24px]' >Home</Link></li>
 <li><Link href="/projects" className='hover:text-yellow-400  hidden sm:flex text-[15px] sm:text-[19px] md:text-[21px] lg:text-[24px]' >Projects</Link></li>
 <li><Link href="/eduaction" className='hover:text-yellow-400 text-[15px] sm:text-[19px] md:text-[21px] lg:text-[24px]' >Eduaction</Link></li>
 <li><Link href="/about" className='hover:text-yellow-400 text-[15px] sm:text-[19px] md:text-[21px] lg:text-[24px]' >About</Link></li>
 
    </ul>
    </div>

 <div>
 <ul className='space-x-[19px] hidden md:flex '>
    <li> <Link href="#!" className='hover:text-yellow-400 text-[18px] sm:text-[19px] md:text-[21px] lg:text-[24px]'>Login</Link></li>
    <li> <Link href="#!" className='hover:text-yellow-400 text-[18px]sm:text-[19px] md:text-[21px] lg:text-[24px]'>Signup</Link></li>
 </ul>

 </div>


      </nav>
    </div>
  )
}

export default Navbar
