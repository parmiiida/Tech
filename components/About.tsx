import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className="min-h-screen bg-[#000000] justify-center items-center w-full flex">
      <div className='flex flex-col md:flex-row justify-between max-w-[90%] mx-auto' >
        <div className='relative w-[90%]'>
          <Image src="/company.jpg" alt="about" width={500} height={100} className='z-10 opacity-50'/>
          <h1 className='text-white justify-center items-center border-2 border-white text-6xl p-5 font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            Who we are
          </h1>
        </div>
        <div>
          <h1 className='text-white text-4xl font-bold'>About</h1>
          <p className='text-white text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </div>
      </div>
    </section>
  )
}

export default About
