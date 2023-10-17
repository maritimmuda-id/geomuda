// ** Import Next
import assets from "@/assets/assets";
import Image from "next/image";

// ** Import Compnents
import ChangePassword from "../ChangePassword/ChangePassword";

export default function Umum() {
  return (
    <>
      <div className="max-w-full rounded-xl bg-[#f8f8f8] p-10 min-h-full border-2 -mt-[2px] rounded-tl-none">
        <div className="flex gap-10">
          <Image
            className="w-56 rounded-xl border-2"
            src={assets.kaisarImage}
          />
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
