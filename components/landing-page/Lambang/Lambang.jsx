import assets from '@/assets/assets'
import { lambang } from '@/constanst/lambang'
import Image from 'next/image'
import React from 'react'

const Lambang = () => {
  return (
    <div className='px-16 py-32 space-y-10'>
      <Image src={assets.logoGmiDefault} alt='logo geomuda indonesia' className='mx-auto w-80'/>
      <div>
        <h2 className='text-2xl font-semibold text-center text-[#c93233] tracking-wide'>Makna Lambang Geomuda Indonesia</h2>
        <div className="py-[1px] bg-[#c93233] my-4 w-2/6 mx-auto"></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-6 p-8'>
        {lambang.map((arti, index) => 
          <div key={index} className='space-y-2'>
            <h3 className='font-semibold text-lg'>{arti.title}</h3>
            <ul className='list-disc pl-4 space-y-1'>
              {arti.description.map((arti,index) => 
                <li key={index} className='text-[#2b2b2b]'>{arti.list}</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Lambang