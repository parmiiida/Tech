import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className="h-screen mx-auto w-full bg-[#000000] flex">
      <div className='flex flex-col md:flex-row justify-center items-center p-5 md:p-10 space-y-10 max-w-6xl mx-auto' >
        <div className='relative w-[90%]'>
          <Image src="/company.jpg" alt="about" width={500} height={100} className='z-10 opacity-30'/>
          <h1 className='text-white justify-center items-center border-2 border-white text-6xl p-5 font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            Who we are
          </h1>
        </div>
        <div className='w-full p-5'>
          <h1 className='text-white text-4xl font-bold'>About</h1>
          <p className=' text-blue-50 opacity-50  text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quas dignissimos <br/> maxime qui alias debitis perspiciatis voluptates fuga eligendi? Velit aut expedita perspiciatis quidem dolores perferendis ratione voluptates enim at.lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam quas incidunt dolor rerum temporibus modi sed ab architecto, eum at tempore inventore tenetur, quis sunt cumque. Sint, architecto possimus!</p>
        </div>
      </div>
    </section>
  )
}

export default About
