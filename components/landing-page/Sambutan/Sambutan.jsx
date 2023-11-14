import assets from '@/assets/assets'
import { sambutan } from '@/constanst/sambutan'
import Image from 'next/image'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const Sambutan = () => {
  return (
    <div className='px-10 md:px-16 py-36'>
      <div className='flex gap-x-20 justify-center flex-col-reverse lg:flex-row'>
        <div className='basis-2/5'>
          <Image 
            src={assets.khalifRemoveBg}
            className="w-[36em] mx-auto lg:mx-0"
            alt="khalif al faiz remove background"
          />
          <div className='bg-[#7B2418] rounded-full py-3'>
            <h2 className='text-white text-xl text-center uppercase'>Khalif Al Faiz</h2>
          </div>
        </div>

        <div className='flex flex-col space-y-6 basis-2/5'>
          <div>
            <FaQuoteLeft className='text-4xl text-[#7B2418]'/>
          </div>
          <div className='space-y-4'>
            <h2 className='text-3xl font-semibold py-4 text-center lg:text-left'>SAMBUTAN KETUA UMUM ASOSIASI GEOMUDA INDONESIA</h2>
            <div className='space-y-3'>
              { sambutan.map((description, index) => 
                <p className='leading-7' key={index}>{description.text}</p>
              )}
              {/* <p className='leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className='leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
            </div>
          </div>
          <div className='flex justify-end'>
            <FaQuoteRight className='text-4xl text-[#7B2418]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sambutan