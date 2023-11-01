import { nawasatya } from '@/constanst/nawasatya'
import React from 'react'

const Nawasatya = () => {
  return (
    <div className='px-16 py-32'>
      <h2 className='text-3xl font-semibold text-center text-[#c93233]'>NAWA SATYA</h2>
      <div className="py-[0.75px] bg-[#c93233] my-8 w-3/6 mx-auto"></div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 md:gap-y-16 md:gap-x-4 px-0 md:px-6 py-16'>
        { nawasatya.map((list, index) => 
          <div className='block md:flex justify-center gap-x-6 space-y-2 md:space-y-0' key={index}>
            <div className='basis-1/3 text-4xl md:text-6xl font-semibold flex justify-center text-[#c93233]'>{list.number}</div>
            <p className='basis-2/3 text-center md:text-left'>{list.description}</p>
          </div>
        ) }
      </div>
    </div>
  )
}

export default Nawasatya