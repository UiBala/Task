import React, { useState } from 'react';
import blog from '../assets/images/youtube.jpg';
import { BsCheck } from 'react-icons/bs';

const Blog = () => {

    const [open,setOpen] = useState(1);

    const viewContent = (id) => {
        setOpen(id)
    };

    const buyerList = [
        {
            id:1,
            para:"Post your requirements."
        },
        {
            id:2,
            para:"Sit back for multiple suppliers to contact you."
        },
        {
            id:3,
            para:"Choose among the suppliers based on the ratings and reviews."
        }
    ];

    const suppilerList = [
      {
          id:1,
          para:"Post your Suppiler"
      },
      {
          id:2,
          para:"Suppling multiple Products to contact you."
      },
      {
          id:3,
          para:"Choose among the suppliers based on the ratings and reviews."
      }
  ];

    const buyer = buyerList.map((el)=>{
        return <div className='flex items-center'>
          <BsCheck className='icon-check text-white bg-[#32BA7C] rounded-full' />
          <li className='ms-2 py-1 w-100 flex text-white items-center font-[12px]'>{el.para}</li>
          </div>
    })

    const supplier = suppilerList.map((el)=>{
      return <div className='flex items-center'>
      <BsCheck className='icon-check text-white bg-[#32BA7C] rounded-full' />
      <li className='ms-2 py-1 w-100 flex text-white items-center font-[12px]'>{el.para}</li>
      </div>
  })

  return (
    <div className="container">
    <div className="blog bg-[#072F57] rounded">
  
       <div className="row justify-evenly mx-auto py-20 rounded">
           <div className='col-lg-6 col-md-12 px-8 my-6 '>
            <img src={blog} className='rounded w-full h-auto bg-cover' alt="" />
            </div>

       <div className='col-lg-5 col-md-12 blog-menu'>
          <ul className='mt-5 mb-10 flex menu_list items-center'>
             <li className={open ===  1 ? 'active_buyer' : 'font-[0.5rem] me-10 font-semibold'} onClick={()=> viewContent(1)} >Buyer
             </li>
             <li className={open ===  2 ? 'active_buyer' : 'font-[0.5rem] me-10 font-semibold'} onClick={()=> viewContent(2)}>Suppiler
             </li>
          </ul>
          <div className={open === 1 ? 'view-content' : "content"}>
          <ul >
            {buyer}
          </ul>
          </div>
          <div className={open === 2 ? 'view-content' : "content"}>
            <ul>
              {supplier}
            </ul>
          </div>
       </div>
    
        </div>
       </div>
    </div>
  )
}

export default Blog