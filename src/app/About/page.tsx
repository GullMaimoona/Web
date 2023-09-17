import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <>
  
  <div className=' text-center'>
  <h1 className=' text-5xl font-bold mb-3 text-blue-900 mt-20'>About Us</h1>
        <p className=' -mt-10 mb-5 text-2xl p-16 '>
         We would shine like ⭐⭐ Stars to show path to others.
        </p>
  </div>

  <div className=' flex -mt-32 gap-16 px-10 '>
      <div className=' text-center mt-28 shadow-lg bg-blue-400 rounded-[20px]'>
    <h1 className=' text-5xl font-semibold -mb-5 mt-3'>Our Vision</h1>
     <p className='  -mb-5  text-xl p-10 '>
     Our vision is to make Pakistan a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.
    </p>
   </div>

   <div className=' text-center mt-28 shadow-lg bg-blue-300 rounded-[20px]'>
     <h1 className=' text-5xl font-semibold -mb-5 mt-3'>Our Mission</h1>
     <p className='  -mb-5  text-xl p-10 '>
     The mission of Panaverse is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. 
    </p>
   </div>
   </div>
   <div className='   bg-blue-100'>
   <div className='w-[80%] flex m-auto mt-12 '>

<div className=' w-1/2  mt-24 ml-5 px-8 '> 
    <Image src='/arifalvi.webp' alt='Panaverse' width={1200} height={1200} />
  </div>
  
  <div className=' w-1/2 mt-32 shadow-sm  bg-white text-left px-8 -ml-20 mb-28'>
    <h1 className=' text-5xl font-semibold border-l-[6px] border-l-blue-600 pl-3 mt-10'>Dr. Arif Alvi</h1>
   <p className=' mt-5 mb-5 text-base'>Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.
   </p>
   <p className=' mt-5 mb-5 text-base font-normal'>Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982).
   </p>
   <p className=' mt-5 mb-5 text-base font-normal '>President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001). Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013).
   </p>
  </div>
  </div>


  <div className='w-[80%] flex m-auto mt-12 ml-56 '>

 <div className=' w-1/2 mt-32 shadow-sm bg-white text-left px-8 -ml-20 '>
    <h1 className=' text-5xl font-semibold border-l-[6px] border-l-blue-600 pl-3 mt-10'>Zia Khan</h1>
   <p className=' mt-5 mb-5 text-base'>CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education. Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development. Expert in concept, business modeling & strategy development for startups, specializing in DeFi and token economics. Mentored and trained hundreds of thousands of developers.Triple masters degrees in business administration, engineering, and finance from Arizona State University.
   </p>
  </div>
   <div className=' w-1/2 mt-36 -ml-12 px-8 mb-8 '> 
    <Image src='/sirziakhan.webp' alt='Panaverse' className=' bg-white' width={1200} height={14400} />
  
  </div>
  </div>


  <div className='w-[80%] flex m-auto mt-12 '>

<div className=' w-1/2  mt-24 ml-5 shadow-lg bg-slate-300 image-center mb-24 py-16 px-12 '> 
    <Image src='/panaverse.webp' alt='Panaverse' width={1200} height={1200} />
  </div>
  
  <div className=' w-1/2 mt-32 shadow-sm bg-white text-left px-8 -ml-10 mb-32'>
    <h1 className=' text-5xl font-semibold border-l-[6px] border-l-blue-600 pl-3 mt-10'>Panaverse DAO</h1>
   <p className=' mt-5 mb-5 text-base'>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet
Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
   </p>
  
  </div>
  </div>
  </div>

       
        


   
    </>

    
  )
}
