import Link from 'next/link'
import React from 'react'

const about = () => {
  return (
    <div className='w-full h-full'>
  
<div  className=' italic pt-1 pl-2 text-center text-[10px] sm:text-[18px] sm:text-center sm:pt-3 sm:pb-2  font-medium text-blue-200  underline'>
<p className='fade-in' >I'm very happy to have you on my portfolio.</p>
</div>
    
      <div className='text-[11px]  text-yellow-400 pl-4 pt-3 pb-0  font-medium italic sm:text-[22px] lg:text-[32px]'>

      <h1 className='fade-in'>About me :</h1><br />
      </div>
     <div className='text-[9px] sm:text-[14px] lg:text-[16px] lg:text-center sm:text-justify sm:pr-2 sm:pl-3 pl-2  pt-0 text-left text-white pb-2'>
      <p>
        I'm a Graphic Designer and I've already Works with an organization and I also enrolled in <q>Governor IT Initiative .</q>
         <br /> I'm seeking for good opportunities to start my career and being able to support my family
      </p>
      </div>
<div >
  <br />
<h1 className='  text-[10px] sm:text-[16px] lg:text-[19px] text-yellow-400 sm:pl-5 pl-3  pb-3 font-medium'>You can Also Connect With me:</h1>

      <div className='justify-center items-center pl-2   w-[206px] sm:w-[335px] lg:w-[365px] md:ml-4 sm:ml-5 lg:ml-8 ' >
        
        <p className=' text-black text-[9px] sm:text-[15px] lg:text-[17px]  sm:pt-2  sm:pl-2 sm:font-medium sm:h-[40px] h-[21px]  bg-yellow-500 border-2 rounded-sm sm:rounded-lg md:rounded-xl lg:rounded-[18px] sm:shadow-md sm:shadow-slate-200 sm:mb-4 lg:mb-4 pl-1 mb-2 '>Here's my LinkedIn-Profile :
          <Link href="https://www.linkedin.com/in/muhammad-bilal~-1b07042b6/" target='-blank' className=' pl-1 text-[10px] sm:text-[16px] sm:text-right text-slate-50 hover:text-yellow-500  hover:bg-slate-900   sm:rounded-md  lg:rounded-lg lg:pr-2 sm:pr-2   ' >LinkedIn-Profile</Link>
          </p>
        
          <p className=' text-[9px] sm:text-[15px] sm:pt-2 sm:pl-2 sm:font-medium sm:h-[40px] h-[21px]  text-black bg-yellow-500 border-2 rounded-sm sm:rounded-lg md:rounded-xl lg:rounded-[18px] sm:shadow-md sm:shadow-slate-200 sm:mb-4 lg:mb-4 mb-2 '>
             Here's my Github Profile :
          <Link href="https://github.com/Muhammad-Bilal-Razaa" target='-blank' className=' pl-1 text-[10px] sm:text-[16px] sm:pl-[12px] sm:pr-3 hover:text-yellow-500  hover:bg-slate-900  text-slate-50  sm:rounded-md   lg:rounded-lg lg:pr-2    ' >
          Github</Link>
          </p>

          <p className=' text-[9px] sm:text-[15px] sm:pt-2 sm:pl-2 sm:font-medium sm:h-[40px] h-[21px]  text-black bg-yellow-500 border-2 rounded-sm sm:rounded-lg md:rounded-xl lg:rounded-[18px] sm:shadow-md sm:shadow-slate-200 '> Here's my Facebook Profile :
          <Link href="" className= ' pl-1 text-[10px]  sm:text-[16px] sm:pl-2  sm:pr-2 text-slate-50 hover:text-yellow-500 hover:bg-slate-900 sm:rounded-md  lg:rounded-lg lg:pr-2    ' >
          Facebook</Link>
          </p>
      

      </div>
      </div>

    

    </div>
  )
}

export default about
