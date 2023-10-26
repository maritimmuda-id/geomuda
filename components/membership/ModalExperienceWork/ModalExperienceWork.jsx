import { useModalExperience } from '@/zustand/useModalExperience';
import React from 'react'
import { IoMdClose, IoMdSave } from 'react-icons/io';

const ModalExperienceWork = () => {
  const { setExperience } = useModalExperience();

  return (
    <div className='flex flex-col justify-center items-center h-screen z-20'>
      <div className='w-7/12 space-y-5 border-2 py-6 px-6 rounded-xl bg-white'>
        <div className='border-b-2 pb-4 flex justify-between'>
          <h1 className='text-lg'>Tambah Pengalaman Pekerjaan</h1>
          <button className='text-xl' onClick={setExperience}><IoMdClose /></button>
        </div>
        <form className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 py-5'>
          <div className="flex flex-col space-y-3">
            <label className=''>Posisi</label>
            <input
              type="text"
              className="border-2 border-[#00000053] bg-[#E7E7E7] p-2 rounded-lg w-full text-sm font-light "
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label className=''>Lembaga/Perusahaan</label>
            <input
              type="text"
              className="border-2 border-[#00000053] bg-[#E7E7E7] p-2 rounded-lg w-full text-sm font-light "
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label className=''>Tanggal Mulai</label>
            <input
              type="date"
              className="border-2 border-[#00000053] bg-[#E7E7E7] p-2 rounded-lg w-full text-sm font-light "
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label className=''>Tanggal Berakhir</label>
            <input
              type="date"
              className="border-2 border-[#00000053] bg-[#E7E7E7] p-2 rounded-lg w-full text-sm font-light "
            />
          </div>
        </form>
        <button className='flex justify-between items-center gap-x-2 border-2 bg-[#7B2418] text-white p-2 rounded-lg'>
            <IoMdSave />
            <p className='text-sm'>Simpan</p>
        </button>
      </div>
    </div>
  )
}

export default ModalExperienceWork