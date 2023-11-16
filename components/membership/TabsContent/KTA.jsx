import assets from '@/assets/assets'
import { usePhotoKTA } from '@/zustand/usePhotoKTA';
import Image from 'next/image'
import { IoIosAdd } from 'react-icons/io'

const KTA = () => {

  const { setKta } = usePhotoKTA();

  return (
    <>
      <div className="max-w-full rounded-xl bg-[#f8f8f8] p-10 min-h-full border-2 -mt-[2px] rounded-tl-none">
        <div className="mb-10">
          <h2 className="text-xl font-semibold">Kartu Tanda Anggota</h2>
        </div>

        <div className='flex gap-x-10 justify-between w-full'>
          <div className="relative z-[1]">
            <Image
              className="w-56 aspect-[3/4] rounded-xl border-2 border-slate-200 object-cover object-center"
              src={assets.defaultImage}
              width={500}
              height={500}
            />

            <button
              className="w-9 aspect-square bg-white border-2 rounded-full absolute -bottom-3 -right-4"
              onClick={setKta}
            >
              <IoIosAdd className="text-green-500 text-3xl mx-auto" />
            </button>
          </div>

          <div className='flex flex-col space-y-4 justify-between w-full'>
            <div className="flex flex-col space-y-2 w-full">
              <label>Nama</label>
              <input
                type="text"
                disabled
                className="border-2 border-[#00000066] px-3 py-[6px] p-1 rounded-lg w-full"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label>Nomor KTP</label>
              <div className='flex gap-x-6'>
                <input
                  type="text"
                  className="border-2 border-[#00000066] px-3 py-[6px] p-1 rounded-lg w-full"
                />
                <button className='bg-[#7B2418] text-white p-1 rounded-lg w-1/5'>Cek</button>
              </div>
            </div>
            <button className='bg-[#7B2418] text-white p-2 rounded-lg w-full'>Buat KTA</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default KTA