import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import {Menu,X} from 'lucide-react'
import { IoIosArrowDown } from 'react-icons/io'

const Header = () => {

    const [isOpen,setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }


    const Logo = () => {
        return (
            <div className="logo h-20 w-[150px]">
              <img src={logo} alt="" />
            </div>
        )
    }

    const Links = () => {
        return (
            <>
               <a href="#" className='text-[#6D6E71] transition-all hover:font-semibold no-underline'>Find Supplier</a>
               <a className="dropdown no-underline transition-all sm:my-5 hover:font-semibold my-3 mx-5">
  <button type="button" className="text-[#6D6E71]" data-bs-toggle="dropdown">
    Find Services Tags <IoIosArrowDown className='inline' />
  </button>
  <ul class="dropdown-menu">
    <li><a className="dropdown-item" href="#">Tag 1</a></li>
    <li><a className="dropdown-item" href="#">Tag 2</a></li>
    <li><a className="dropdown-item " href="#">Tag 3</a></li>
  </ul>
</a>
               <a href="#" className='login no-underline font-semibold' >Login/SignIn</a>
            </>
        )
    }

    const NavLinks = () => {
        return (
            <>
            <nav className='w-1/7 flex items-center justify-end'>
                <div className="hidden w-full md:flex items-center justify-between">
                 <Links />
                </div>
                <div className='md:hidden'>
                <button onClick={toggleNavbar}>
                    {isOpen ? <X className='header-icon' /> : <Menu className='header-icon' />}
                </button>
                </div>
            </nav>
            {
                isOpen && (
                    <div className='flex basis-full flex-col items-center'>
                        <Links />
                    </div>
                )
            }
            </>
        )
    }

  return (
    <div className="container">
     <header className='bg-dark-bckground mx-auto flex-wrap flex w-full items-center justify-between py-2'>
       <Logo />
       <NavLinks/>
     </header>
    </div>
  )
}

export default Header