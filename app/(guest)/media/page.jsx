import assets from '@/assets/assets'
import Banner from '@/components/landing-page/Banner/Banner'
import { news } from '@/constanst/news'

import Image from 'next/image'

const Media = () => {
  return (
    <div>
      <Banner
        image={assets.banner7}
        title="MEDIA GEOMUDA"
        subtitle="Asosiasi Geomuda Indonesia"
      />
      <div className='flex space-x-12 text-white -mt-20 ml-24'>
        <p>Beranda</p>
        <p>Berita</p>
        <p>Pengumuman</p>
        <p>Opini</p>
        <p>Kepustakaan</p>
      </div>
      <div className='mt-4 mb-16 grid grid-cols-3 gap-y-12 mx-10'>
        {
          news.map((data, index) => (
            <div className='w-96 mx-auto space-y-2 bg-slate-50 p-6 rounded-md border-2' key={index}>
              <p className='uppercase text-sm text-gray-600'>{data.type}</p>
              <h2 className='capitalize text-xl font-semibold'>{data.title}</h2>
              <p className='text-sm leading-5'>{data.description}</p>
              <div className='flex justify-between'>
                <Image src={assets.logoGmiDefault} className='w-10'></Image>
                <p className='uppercase'>1 Min Read</p>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Media