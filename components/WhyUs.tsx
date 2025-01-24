import React from 'react'
import Image from 'next/image'

const WhyUsCard = [
    {
        title: 'costumized Solution',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        image: '/solution.png'
    }, {
        title: 'Expertise Experience',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        image: '/computer.png'
    },{
        title: 'End to End development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        image: '/development.png'
    },{
        title: 'Security',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        image: '/security.png'
    },
]

const WhyUs = () => {
  return (
    <div className='min-h-screen w-full py-20'>
        <div className='w-[90%] mx-auto bg-zinc-900 p-8 '>
            <div className='text-center mb-12 -mt-[65px]'>
                <h1 className='text-white text-6xl font-bold uppercase'><span className='text-5xl text-violet-500'>+</span> Why Us </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {WhyUsCard.map((item, index) => (
                    <div key={index} className='p-6 text-center'>
                        <Image src={item.image} alt={item.title} width={50} height={50} className='mx-auto mb-4' />
                        <h1 className='text-white text-xl font-bold mb-2'>{item.title}</h1>
                        <p className='text-white text-md'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WhyUs
