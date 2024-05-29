import React from 'react'
import { RiSuitcaseFill } from "react-icons/ri";
import { MdLocationPin } from 'react-icons/md';

const Banner = () => {
  return (
    <div className="banner text-center flex
    flex-col items-center justify-center relative md:h-50 sm:h-[20px]">
        <div className="banner_content z-[1000] absolute">
            <h1 className='text-white lg:text-[60px] md:text-[50px] sm:text-[40px]  font-bold'>Are You a Supplier?</h1>
            <div className="text-white lg:text-[60px] md:text-[40px] sm:text-[30px]  mb-3">
            Explore Matching Opportunities.
            </div>

            <div className="lg:w-100 flex lg:flex-row flex-col flex-wrap items-center justify-evenly mx-auto">
           <div className="input_form relative">
            <RiSuitcaseFill className='absolute icons' />
              <input className='text-center md:px-8 rounded' type="text" placeholder='Search your required service here' />
           </div>
           <div className="input_form relative mx-3 my-3">
           <MdLocationPin className='absolute icons' />
              <input className='text-center  md:px-8  rounded' type="text" placeholder='Search your desired location here' />
           </div>
           <div className="but_form">
      <button className="bg-[#00732F] rounded text-white font-semibold" type="button">
        Search
      </button>
    </div>
            </div>

        <div className="text-center text-white my-2">
          <span className='font-bold'>Are you a buyer?</span><span className='underline font-light ps-2'>Click here if you are looking to post a requirements</span>
        </div>

        </div>
    </div>
  )
}

export default Banner