import React from 'react'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className=" bg-fix  bg-cover py-40 text-center rounded-b-[140px] bg-blue-500">
     <h1 className=' text-5xl font-bold px-48 text-white '>Discover a limitless world of learning with Web 3 and Metaverse</h1>
     <p className=' px-6  mt-12  mb-12 text-2xl  text-white '>
 A One and quater Years Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies
    </p>
     <button className=' bg-blue-600 px-4 py-4 text-white rounded-xl text-xl font-semibold hover:bg-pink-600 hover:animate-bounce'>Get started now</button>
    </div>


    
      <div className=' flex shadow-2xl w-[60%] justify-around py-16 m-auto bg-white -mt-20 rounded-2xl'>
      <Image src='/Logo.webp' alt='Panaverse' width={150} height={150}/>
      <Image src='/pan.webp' alt='Panaverse' width={150} height={150}/>
      <Image src='/sa.webp' alt='Panaverse' width={150} height={150}/>
      </div>


        <div className=' w-[80%] flex m-auto'>

        <div className=' w-1/2 mt-28 pt-10'>
          <h1 className=' text-5xl font-semibold border-l-[6px] border-l-blue-600 pl-3'>Program Of Studies</h1>
         <p className=' mt-5 mb-5 text-xl '>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.
         </p>
        <button className=' bg-blue-600 px-4 py-4 text-white rounded-xl text-xl font-semibold hover:bg-pink-600 hover:animate-bounce text-center'>Explore Course</button>
        </div>
     
        

        <div className=' w-1/2 mt-20'> 
          <Image src='/t.webp' alt='Panaverse' width={800} height={800}/>
        </div>
        </div>

      
      <div className=' w-[80%] flex m-auto mt-12  gap-16'>

      <div className=' w-1/2  mt-24 ml-5 bg-white'> 
          <Image src='/q.webp' alt='Panaverse' className=' bg-white' width={1200} height={1200} />
        </div>
 
      <div className=' w-1/2 mt-5'>
          <h1 className=' text-5xl font-semibold border-l-[6px] border-l-blue-600 pl-3 mt-10'>Live classes are available via Zoom</h1>
         <p className=' mt-5 mb-5 text-xl '>This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.
         </p>
        <button className=' bg-blue-600 px-4 py-4 text-white rounded-xl text-xl font-semibold hover:bg-pink-600 hover:animate-bounce text-center'>Further Info</button>
        </div>

        
        </div>

        <div className=' text-center mt-28 -mb-16'>
          <h1 className=' text-5xl font-semibold border-l-[6px] -mb-5 '>Our learning library</h1>
          <p className='  -mb-5  text-xl p-10 '>
         Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users
         </p>
         <button className=' bg-blue-600 px-8 py-5 text-white rounded-xl text-xl font-semibold hover:bg-pink-600 hover:animate-spin text-center'>Browse the library</button>
        </div>
   
       <div className=' flex -mt-9 gap-16 px-10'>
  
       <div className=' text-center mt-28 shadow-lg bg-purple-500 rounded-[20px]'>
          <h1 className=' text-5xl font-semibold -mb-5 mt-3'>Metaverse</h1>
          <p className='  -mb-5  text-xl p-10 '>
          Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professionals.
         </p>
         <button className=' bg-blue-600 px-10 py-4 text-white rounded-xl text-xl font-semibold hover:bg-pink-600 hover:animate-pulse text-center mb-5'>Read More</button>
        </div>

        <div className=' text-center mt-28 shadow-lg bg-orange-400 rounded-[20px]'>
          <h1 className=' text-5xl font-semibold -mb-5 mt-3'>Blockchain</h1>
          <p className='  -mb-5  text-xl p-10 '>
          Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professionals.
         </p>
         <button className=' bg-blue-600 px-10 py-4 text-white rounded-xl text-xl font-semibold hover:bg-pink-600 hover:animate-pulse text-center'>Read More</button>
        </div>
        </div>


        <div className=' flex -mt-12  gap-16 px-10'>

        <div className=' text-center mt-28 shadow-lg bg-sky-500
         rounded-[20px]'>
          <h1 className=' text-5xl font-semibold -mb-5 mt-3'>Typescript</h1>
          <p className='  -mb-5  text-xl p-10 '>
          Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professionals.
         </p>
         <button className=' bg-blue-600 px-10 py-4 text-white rounded-xl text-xl font-semibold hover:bg-pink-600 hover:animate-pulse text-center mb-5'>Read More</button>
        </div>

        <div className=' text-center mt-28 shadow-lg bg-rose-500
         rounded-[20px]'>
          <h1 className=' text-5xl font-semibold -mb-5 mt-3'>Next.js</h1>
          <p className='  -mb-5  text-xl p-10 '>
          Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professionals.
         </p>
         <button className=' bg-blue-600 px-10 py-4 text-white rounded-xl text-xl font-semibold hover:bg-pink-600 hover:animate-pulse text-center'>Read More</button>
        </div>

        </div>


    <div className=' text-center mt-28'>
          <h1 className=' text-5xl font-bold border-l-[6px] mb-9'>Here's the Program in a Nutshell</h1>
          <h1 className=' text-2xl font-semibold border-l-[6px]  -mb-12 text-pink-600 -mt-5'>Learn and Earn at the same time</h1>
         <p className=' -mt-5 mb-5 text-xl p-16 '>
         In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program's beginning. It resembles a cross between a corporate venture and an educational project.
         </p>
        </div>



        <div className=' w-[80%] flex m-auto -mt-20 mb-9'>
        <div className=' w-1/2 mt-10 pt-10'>
          <h1 className=' text-5xl font-semibold border-l-[6px] border-l-blue-600 pl-3'>Web3 VS Metaverse</h1>
         <p className=' mt-5 mb-5 text-xl '>Web3 and Metaverse are two cutting-edge technologies. Web3 is the next generation of the internet. Meanwhile, Metaverse is a virtual world that operates on a decentralized Blockchain network. Both Web3 and Metaverse are decentralized systems.
         </p>
        <button className=' bg-blue-600 px-4 py-4 text-white rounded-xl text-xl font-semibold hover:bg-pink-600 hover:animate-bounce text-center'>Further Info</button>
        </div>

        <div className=' w-1/2  mt-24 ml-5'> 
          <Image src='/wvm.webp' alt='Panaverse' width={1600} height={1600} />
        </div>
        </div>

    </>
  )
}

