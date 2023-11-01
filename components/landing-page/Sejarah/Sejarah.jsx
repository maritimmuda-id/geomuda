import assets from '@/assets/assets'
import Image from 'next/image'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Sejarah = () => {
  return (
    <div className='px-16 py-32'>
      <div className='space-y-10'>
        <div>
          <FaQuoteLeft className='text-4xl text-[#7B2418]'/>
        </div>
        <div>
          <h2 className='text-3xl font-semibold my-16 text-center'>SEJARAH PENDIRIAN</h2>
          <div className='space-y-20'>
            <div className='flex flex-col-reverse lg:flex-row justify-center gap-y-10 lg:gap-x-20'>
              <p className='basis-5/12 leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <Image src={assets.sejarah1} className='basis-5/12 mx-auto lg:mx-0'/>
            </div>
            <div className='flex flex-col-reverse lg:flex-row-reverse justify-center gap-y-10 lg:gap-x-20'>
              <p className='basis-5/12 leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <Image src={assets.sejarah2} className='basis-5/12 mx-auto lg:mx-0'/>
            </div>
          </div>

        </div>
        <div className='flex justify-end'>
            <FaQuoteRight className='text-4xl text-[#7B2418]'/>
          </div>
      </div>
    </div>
  )
}

export default Sejarah