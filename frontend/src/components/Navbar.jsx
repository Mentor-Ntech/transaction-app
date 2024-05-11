"use client";

import React, { useState } from 'react'

import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { ona } from '@/assests'
import Image from 'next/image'


const NavbarItems =({title, classProps}) => {
  
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
}

const Navbar = () => {
  
  const [toggleMenu, setToggleMenu] = useState(false)


  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4 h-70'> 
      <div>
       <Image src={ona} alt='logo' className='w-50' height='50'/>
      </div>

      <ul className='text-white md: flex list-none flex-row justify-between items-center flex-initial'>
        {["Market", "Exchange", "Rates", "Trade"].map((item, index) => (
          <NavbarItems key={item + index} title={item}/>
        ))}
      </ul>

      <div>
        {toggleMenu ? (
          <HiMenuAlt4 
          fontSize={28}
          className='text-white md:hidden cursor-pointer'
          onClick={() => setToggleMenu(true)}/>
        ) : (
          <AiOutlineClose 
          fontSize={28}
          className='text-white md:hidden cursor-pointer'
          onClick={() => setToggleMenu(true)}/>
        )}

{toggleMenu && (
          <ul className="z-10 fixed top-0 -right-2 p-3 w-[40vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li> 
            {["Market", "Exchange", "Rates", "Trade"].map((item, index) => (
              <NavbarItems
                key={item + index}
                title={item}
                classProps="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>


      
      
    </nav>
  )
}
 
export default Navbar