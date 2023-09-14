import assets from '@/assets/assets'
import Image from 'next/image'
import { administrators } from '@/constanst/pengurus'

const Pengurus = () => {
  // const arr = [ ...administrators, ...administrators, ...administrators]
  
  return (
    <div className='px-16 py-32'>
      <div className='grid grid-cols-3 gap-y-10'>
        {administrators.map((data, index) => (
          <div key={index} className='rounded-2xl shadow-lg border-2 overflow-hidden max-w-fit mx-auto'>
            <Image src={data.image} alt='Male profile' className=''/>
            <div className='text-center py-5'>
              <h6 className='text-xl font-semibold'>{data.name}</h6>
              <p className='py-1'>{data.position}</p>
            </div>
          </div>  
        ))}
      </div>
    </div>
  )
}

export default Pengurus;