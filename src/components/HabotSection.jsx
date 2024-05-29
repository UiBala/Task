import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

const HabotSection = () => {

    const menu = [
        {
            id:1,
            title:'Abu Dhabi'
        },
        {
            id:2,
            title:'Dubai'
        },
        {
            id:3,
            title:'Sharjah & Ajman'
        },
        {
            id:4,
            title:'Fujairah'
        },
        {
            id:5,
            title:'Ras AI Khaimah'
        },
        {
            id:6,
            title:'Umm AI Quwain'
        }
    ];

    const list = menu.map((el)=>{
        return  <div style={{border:'1.5px solid #E7760D'}} className='list_menu my-2 lg:w-60 w-full md:mx-0 mx-2 py-3 px-4 text-center inline-block rounded'>{el.title}</div>
    })

  return (
    <section className='container habot-section'>
        <div className='row py-5 justify-between xl:items-center mx-auto'>
       <div className='col-lg-6 col-md-12 my-6 '>
       <h1 className='font-extrabold text-4xl'>Ready to dive into <span className='text-[#271555]'>HABOT?</span></h1>
         <p className='font-light py-4 leading-6'>Signing up with HABOT opens the door to a world of new opportunities and potential for business growth. Gain access to a vibrant community of like-minded individuals, unlock valuable resources, and take the first step towards realizing your entrepreneurial dreams.</p>
         <div className='text-white inline-block py-3 px-12 bg-[#00732F] rounded'><span className="lg:pr-6 pr-3 lg:text-[20px] text-sm">Sign up Today !</span> <span><BsArrowRight className="inline-block pl-3 lg:text-4xl text-3xl font-light" /></span> </div>
       </div>

       <div className='col-lg-5 col-md-12'>
          {list}
       </div>

    </div>
    </section>
  )
}

export default HabotSection