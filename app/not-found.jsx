import Link from 'next/link'
import React from 'react'
import { PiSmileySad } from "react-icons/pi"

const Custom404 = () => {
  return ( 
    <div className='flex flex-col justify-center items-center h-screen space-y-10'>
      <PiSmileySad className='text-9xl' />
      <h1 className='text-3xl'>
        404 - This page could not be found.
      </h1>
      <p>
        {"Back to "}
        <Link href='/' className='font-bold underline'>Home</Link>
      </p>
    </div>
  )
}

export default Custom404