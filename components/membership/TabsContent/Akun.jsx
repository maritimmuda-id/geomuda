import React from 'react'
import ChangePassword from '../ChangePassword/ChangePassword'
import ChangeEmail from '../ChangeEmail/ChangeEmail'

const Akun = () => {
  return (
    <>
      <div className="max-w-full rounded-xl bg-[#f8f8f8] p-10 min-h-full border-2 -mt-[2px] rounded-tl-none">
        <div className="mb-10">
          <h2 className="text-xl font-semibold">Akun Anda</h2>
        </div>

        <div className="flex flex-col space-y-2">
          <label>Email</label>
          <input
            type="text"
            className="border-2 border-[#00000066] px-3 py-[6px] p-1 rounded-lg w-full"
          />
        </div>
      </div>

      <ChangePassword />
    </>
  )
}

export default Akun