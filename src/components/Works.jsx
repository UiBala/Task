import React from 'react'
import work from '../assets/data'

const Works = () => {
  return (
    <div className="container">
      <div className="works">
        <div className="work-title text-center pb-3">
            <h2 className='font-bold'>How it works?</h2>
        <p className='max-w-screen-lg leading-7 mt-4 font-normal color-black mx-auto'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, and build successful business relationships, sharing valuable feedback.</p>
        </div>

     <div className="cards my-5">
        <div className="row cards-row">
          {work}
        </div>
     </div>
     </div>
    </div>
  )
}

export default Works