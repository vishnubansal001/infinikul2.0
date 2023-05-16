import React from 'react'
import { NavBar } from './NavBar'
import { GrFormNextLink } from "react-icons/gr";

const LandingPage = () => {
  return (
    <div className='lg:h-[1120px] bg-cover  filter-blue blur-3x bg-[url(C:\Users\singh\Desktop\Infinikul\infi\src\assets\bg1.png)] text-white'>
          <NavBar/>
          <div className='mt-[300px] '>
             <h1 className='lg:text-[80px] text-[60px] font-bold '>unlock your potential with <br/>
             our community.
             </h1>

             <h1 className='lg:text-[25px] text-[18px] mt-8'>connect,learn,achieve,and earn with our community. </h1>
          </div>
<div className='flex justify-center mt-24'>
<button className="text-base font-bold text-purple-600 bg-white  w-52 flex items-center justify-center rounded-2xl h-12">
              Get Started <GrFormNextLink size={20} />
            </button>
</div>


          
    </div>
  )
}

export default LandingPage