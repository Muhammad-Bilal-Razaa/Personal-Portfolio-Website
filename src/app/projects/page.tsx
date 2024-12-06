import React from 'react'
import Link from 'next/link'

const projects = () => {
  return (
    <>
    <div className=' text-[15px]  pt-8 italic w-full h-full     '>
       
<div className=' font-semibold block sm:text-[24px] md:text-[29px] lg:text-[32px] text-yellow-400  ml-[8px] sm:ml-[8%] md:ml-[15%] lg:m-0 lg:text-center'>
        <h1 className='fade-in' >Here's My some Projects </h1>
        </div>

       <div  className='  grid-cols-1 lg:flex justify-center items-center lg:ml-0 lg:pt-10 md:ml-[20%] sm:ml-[10%] ml-[6%]  '>
        <div className='div-1'>
        <img src="/Project-1.png" alt="Project-1" className=' w-[190px] h-[130px] sm:w-[350px] sm:h-[195px] sm:mb-4    mt-[16px] mb-1
          border-[2px]  border-yellow-500 rounded-[8px] sm:border-[6px] sm:border-double  md:border-[7px] md:border-double md:rounded-[14px] lg:ml-4 lg:mr-8 lg:h-[220px] ' />
          
          
          <h1><Link href="https://html-css-websiteproject.vercel.app/" target='-blank' className='pl-2 pr-2  hover:bg-yellow-400 hover:rounded-lg hover:text-black hover:font-semibold hover:border-[2px] sm:text-[20px] sm:hover:border-[3px] sm:ml-[38px]'>HTML-CSS(website)</Link></h1>
          </div>

      <div  className='div-2'>
        <img src="/project-2.png" alt="Project-2" className=' w-[190px] h-[130px] sm:w-[350px] sm:h-[195px] sm:mb-4  mt-[16px] mb-1
         border-[2px]  border-yellow-500  rounded-[8px] sm:border-[6px] sm:border-double md:border-[7px] md:border-double md:rounded-[14px] lg:mr-8 lg:h-[220px]' />
        
        <h1><Link href="https://hackathonmilestones12-ten.vercel.app/" target='-blank' className='pl-2 pr-2 hover:bg-yellow-400 hover:rounded-lg hover:text-black hover:font-semibold hover:border-[2px] sm:text-[20px] sm:hover:border-[3px] sm:ml-[38px] '>Static-Resume</Link></h1>

        </div>

        <div  className='div-3'>
        <img src="/Project-3.png" alt="Project-3"  className=' w-[190px] h-[130px]  sm:w-[350px] sm:h-[195px] sm:mb-4   mt-[16px] mb-1 
         border-[2px]   border-yellow-500  rounded-[8px] sm:border-[6px] sm:border-double md:border-[7px] md:border-double md:rounded-[14px] lg:h-[220px]  '/>
        
        <Link href="https://milestones-3-flax.vercel.app/" target='-blank' className= ' hover:bg-yellow-400 pl-2 pr-2 hover:rounded-lg hover:text-black hover:font-semibold hover:border-[2px] sm:text-[20px] sm:hover:border-[3px] sm:ml-[38px] '>Dynamic-Resume</Link>
</div>
      

    </div>
   </div>
    </>
  )
}

export default projects
