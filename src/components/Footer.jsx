import React from 'react'
import logo from '../assets/images/footericon.png'
import {FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { TiSocialFacebook } from 'react-icons/ti'

const Footer = () => {
  
  return (
    <div className="footer bg-[#123557] py-8 text-white">
        <div className="container">
            <div className='bord'>
            <div className="row bordering py-3">
                <div className="col-lg-9 col-md-12">
                    <div className="row">
                        <div className="col-lg-3 my-auto">
                        <div className="logo-footer">
                            <img src={logo} alt="" />
                            <div className='font-light mt-3'>© R Singhania</div>
                        </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-details">
                                <h5>Company</h5>
                                <a href="#">About</a>
                                <a href="#">FAQ</a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-12">
                                <div className="footer-details">
                                <h5>Terms</h5>
                                <a href="#">Data Privacy</a>
                                <a href="#">Terms</a>
                                <a href="#">Accessibility</a>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-6 col-sm-12">
                                <div className="footer-details">
                                <h5>Related</h5>
                                <a href="#">Find Buyer</a>
                                <a href="#">Feedback</a>
                                </div>
                            </div>
                        </div>
                    </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 my-auto">
                                <div className="icons-footer">
                                    <ul className='flex'>
                                     <li className='p-2 lg:p-3 sm:p-2 rounded-full '><FaLinkedinIn className='icon text-white' /></li>
                                     <li className='p-2 lg:p-3 sm:p-2 rounded-full mx-2'><FaTwitter className='icon text-white' /></li>
                                     <li className='p-2 lg:p-3 sm:p-2 rounded-full '><TiSocialFacebook className='icon text-white' /></li>
                                     <li className='p-2 lg:p-3 sm:p-2 rounded-full ms-2'><FaInstagram className='icon text-white' /></li>
                                    </ul>
                                </div>
                            </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Footer