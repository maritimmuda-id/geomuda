// ** Import Next
import assets from "@/assets/assets";
import Image from "next/image";

// ** Import Compnents
import ChangePassword from "../ChangePassword/ChangePassword";
import { IoIosAdd } from "react-icons/io";

export default function Umum() {
  return (
    <>
      <div className="max-w-full rounded-xl bg-[#f8f8f8] p-10 min-h-full border-2 -mt-[2px] rounded-tl-none">
        <div className="flex gap-6">
          <div className="flex flex-col space-y-4">  
            <div className="relative z-[1]">
              <Image
                className="w-48 aspect-[3/4] rounded-xl border-2 border-slate-200"
                src={assets.defaultImage}
                />
              <button className="w-9 aspect-square bg-white border-2 rounded-full absolute -bottom-3 -right-4"><IoIosAdd className="text-green-500 text-3xl mx-auto"/></button>
              {/* <button className="text-xs border border-slate-200 p-2 rounded-md bg-slate-50">Ubah Foto</button> */}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Kaisar Akhir</h2>
            <p className="text-lg text-[#7B2418] font-medium">
              Anggota Biasa Geomuda Indonesia
            </p>
          </div>
        </div>
        {/* <div className='mt-8 grid grid-cols-2 gap-y-6 gap-x-10'> */}
        <form className="mt-8 grid grid-cols-2 gap-y-6 gap-x-10">
          <div className="flex flex-col space-y-2">
            <label>Nomor ID</label>
            <input
              type="text"
              className="border-2 border-gray-500 active:border-[#7B2418] p-1 rounded-lg w-full"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Email</label>
            <input
              type="text"
              className="border-2 border-gray-500 active:border-[#7B2418] p-1 rounded-lg w-full"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Alamat</label>
            <input
              type="text"
              className="border-2 border-gray-500 active:border-[#7B2418] p-1 rounded-lg w-full"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Tanggal Lahir</label>
            <input
              type="text"
              className="border-2 border-gray-500 active:border-[#7B2418] p-1 rounded-lg w-full"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Jenis Kelamin</label>
            <input
              type="text"
              className="border-2 border-gray-500 active:border-[#7B2418] p-1 rounded-lg w-full"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>Negara</label>
            <input
              type="text"
              className="border-2 border-gray-500 active:border-[#7B2418] p-1 rounded-lg w-full"
            />
          </div>
          <button className="col-start-1 col-end-3 bg-[#7B2418] text-white p-2 rounded-lg">
            Simpan
          </button>
        </form>
        {/* </div> */}
      </div>

      <ChangePassword />
    </>
  );
}
