import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
    <div className=' md:flex align-middle gap-[30px] p-[60px] bg-black'> 
        <div className=' md:w-1/4 mb-[20px]'>
         <h1 className=' text-white text-2xl font-semibold mb-3 border-l-blue-600 border-l-4 pl-3' >About Us</h1>
         <Image src='/Logo.webp' alt='Panaverse' width={120} height={120}/>
         <p className=' text-gray-400 pr-[40px] mt-3'>The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread</p>
        </div>
        <div className=' md:w-1/4 mb-[20px] md:mb-[0px]'>
         <h1 className=' text-white text-2xl font-semibold border-l-blue-600 border-l-4 pl-3'>Useful Links</h1>
         <ul className=' text-gray-400 pt-10'>
          <li><Link href='./' className=' hover:text-blue-600'>Home</Link></li>
          <li><Link href='./' className=' hover:text-blue-600'>Discover</Link></li>
          <li><Link href='./' className=' hover:text-blue-600'>About</Link></li>
          <li><Link href='./' className=' hover:text-blue-600'>Contact</Link></li>
         </ul>
        </div>
        <div className=' md:w-1/4 mb-[20px] md:mb-[0px]'>
         <h1 className=' text-white text-2xl font-semibold border-l-blue-600 border-l-4 pl-3'>Follow Us</h1>
         <ul className=' text-gray-400 pt-10'>
          <li><Link href='./' className=' hover:text-blue-600'>Facebook</Link></li>
          <li><Link href='./' className=' hover:text-blue-600'>Twitter</Link></li>
          <li><Link href='./' className=' hover:text-blue-600'>Github</Link></li>
          <li><Link href='./' className=' hover:text-blue-600'>Youtube</Link></li>
         </ul>

        </div>
        <div className=' md:w-1/4 mb-[20px] md:mb-[0px]'>
         <h1  className=' text-white text-2xl font-semibold border-l-blue-600 border-l-4 pl-3'>Contact  Us</h1>
         <ul className='text-gray-400  pt-10'>
          <li><Link href='./' className=' hover:text-blue-600'>+92 123 456789</Link></li>
          <li><Link href='./' className=' hover:text-blue-600'>gullmaimoona853@gmail.com</Link></li>
          <li><Link href='./' className=' hover:text-blue-600'>Lahore, Pakistan</Link></li>
         </ul>
        </div>
    </div>
    <div className=' md:flex justify-between px-[50px]  py-[10px] text-center'>
      <p className=' font-bold'>All Rights Reserved © | <br className=' md:hidden' />Maimoona Gull</p>
      <div >
      <Link href={'/'}>Legals </Link>|
      <Link href={'/'}> Terms of use </Link>|
      <Link href={'/'}> Privacy Policy</Link>


      </div>
    </div>
    </>
  )
}
