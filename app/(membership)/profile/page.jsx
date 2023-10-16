// ** Import Components
import NavMember from "@/components/membership/NavMember/NavMember";
import NavLeft from "@/components/membership/NavLeft/NavLeft";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";
import assets from "@/assets/assets";
import ChangePassword from "@/components/membership/ChangePassword/ChangePassword";

const ProfilePage = () => {
  return (
    <div>
      <NavMember />
      <div className="flex">
        <NavLeft />
        <div className="px-10 py-16 basis-5/6 h-full">
          <div className="mb-10">
            <h1 className="text-3xl">Profile</h1>
          </div>
          <div className="overflow">
            <ul className="flex items-center">
              <li className="p-3 px-6 border-2 bg-[#f8f8f8] rounded-tl-xl hover:bg-[#7B2418] hover:text-white">
                Umum
              </li>
              <li className="p-3 px-6 border-2 bg-[#f8f8f8] -mx-[2px] hover:bg-[#7B2418] hover:text-white">
                Pendidikan
              </li>
              <li className="p-3 px-6 border-2 bg-[#f8f8f8] rounded-tr-xl hover:bg-[#7B2418] hover:text-white">
                Pengalaman Kerja
              </li>
            </ul>
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
          </div>

          {/* <div className='shadow-xl max-w-full rounded-xl bg-[#f8f8f8] p-8 min-h-full border-2 -mt-[10px]'>
            <div className='flex justify-between items-center'>
              <h2 className='text-xl'>Daftar Riwayat Pendidikan</h2>
              <button className='flex justify-between items-center bg-[#7B2418] p-2 rounded-md space-x-2 text-white'>
                <AiOutlinePlus  className='text-sm'/>
                <span className='text-sm'>Tambah</span>
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default ProfilePage;
