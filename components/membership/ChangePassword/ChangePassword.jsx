const ChangePassword = () => {
  return (
    <div className='max-w-full rounded-xl bg-[#f8f8f8] p-10 min-h-full border-2 mt-6'>
      <h2 className='text-xl font-semibold mb-6'>Ubah Password</h2>
      <form className="space-y-4 my-2">
        <div className='flex flex-col space-y-2'>
          <label>Password Lama</label>
          <input type='password' className='border-2 border-gray-500 active:border-[#7B2418] p-1 rounded-lg w-full'/>
        </div>
        <div className='flex flex-col space-y-2'>
          <label>Password Baru</label>
          <input type='password' className='border-2 border-gray-500 active:border-[#7B2418] p-1 rounded-lg w-full'/>
        </div>
        <div className='flex flex-col space-y-2'>
          <label>Konfirmasi Password Baru</label>
          <input type='password' className='border-2 border-gray-500 active:border-[#7B2418] p-1 rounded-lg w-full'/>
        </div>
        <button className='bg-[#7B2418] text-white p-2 rounded-lg w-full'>Simpan</button>
      </form>
    </div>
  )
}

export default ChangePassword