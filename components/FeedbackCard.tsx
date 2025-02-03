'use client'
import React from 'react'

const CardLists = [
  { image: 'https://via.placeholder.com/150', title: 'Hi' }
]

const FeedbackCard = () => {
  return (
    <div className=''>
      <div
        className="relative w-full max-w-md md:max-w-lg lg:max-w-lg min-h-[480px] rounded-lg backdrop-blur-xl"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.1))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.1))",
        }}
      >
        {CardLists.map((CardList, index) => (
          <div key={index} className="p-4">
            <img src={CardList.image} alt={CardList.title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl mt-4">{CardList.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeedbackCard
