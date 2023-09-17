import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiAlignRight } from "react-icons/bi";


export default function Header() {
  return (
    <div className='flex justify-between items-center py-2 w-full '>

    <div>
       <Image src='/Logo.webp' alt='Panaverse' width={120} height={120}/>
    </div>
    <div>
          <ul className='md:flex space-x-16 text-lg font-semibold hidden'>
            <li className=' hover:text-blue-600 pt-[15px]'>
          <Link href='/'>Home</Link>
            </li>
            <li className=' hover:text-blue-600 pt-[15px]'> 
          <Link href='/Discover'>Discover</Link>
            </li>
            <li className=' hover:text-blue-600 pt-[15px]'> 
          <Link href='/About'>About</Link>
            </li>
            <li className=' hover:text-blue-600 pt-[15px]'>  
          <Link href='/Contact'>Contact</Link>
            </li>
        <div>
        <button className=' bg-blue-600 px-4 py-4 text-white rounded-xl text-xl font-semibold hover:bg-pink-600 hover:animate-bounce'>Login/Signup</button>
        </div>
          </ul>

    </div>
    <div className=' static md:hidden text-2xl'><BiAlignRight /></div>
    </div>
  )
}
