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
    <div className='h-auto w-[full]  bg-[#000000] py-20'>
        <div className='w-[90%] mx-auto  p-8 border border-white/60 bg-gradient-to-r from-white/5 to-black/20  rounded-sm bg-black'>
            <div className='text-center mb-12 -mt-[65px]'>
                <h1 className='text-white text-6xl font-bold uppercase'><span className='text-5xl text-violet-500'>+</span> Why Us </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {WhyUsCard.map((item, index) => (
                    <div key={index} className='p-auto py-2 text-center'>
                        <Image src={item.image} alt={item.title} width={50} height={50} className='mx-auto mb-1' />
                        <h1 className='text-blue-50 opacity-50 text-xl font-bold mb-2'>{item.title}</h1>
                        <p className='text-blue-50 opacity-50 text-sm'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WhyUs
