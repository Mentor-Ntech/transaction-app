import React from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { ona } from '@/assests'
import Image from 'next/image'


const Navbar = () => {
  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'> 
      <div>
       <Image src={ona} alt='logo' className='w-50' height='50'/>
      </div>

      <HiMenuAlt4 />
      <AiOutlineClose />
    </nav>
  )
}

export default Navbar