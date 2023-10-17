// ** Import Icons
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { PiGraduationCap } from "react-icons/pi";

export default function Pendidikan() {
  return (
    <div className="shadow-xl max-w-full rounded-xl rounded-tl-none bg-[#f8f8f8] p-10 min-h-full border-2 -mt-[2px]">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-medium">Daftar Riwayat Pendidikan</h2>
        <button className="flex justify-between items-center bg-[#7B2418] p-2 rounded-md space-x-2 text-white">
          <AiOutlinePlus className="text-sm" />
          <span className="text-sm">Tambah</span>
        </button>
      </div>
      <div className="rounded-xl py-6 px-8 w-full bg-[#f1f1f1] shadow-md border-2 flex justify-between">
        <div className="grid grid-cols-2 gap-y-8 gap-x-16 items-center">
          <h4 className="text-lg">Universitas Trisakti</h4>
          <p className="text-sm text-[#5c5c5c] justify-self-end">28/05/2024</p>
          <div className="flex items-center gap-2 text-[#5c5c5c]">
            <PiGraduationCap />
            <p>Teknik Informatika</p>
          </div>
        </div>
        <div className="grid justify-items-center gap-y-2">
          <div className="w-full self-center bg-[#b9b9b9] p-2 rounded-md">
            <HiOutlinePencil className="text-lg"/>
          </div>
          <div className="w-full self-center bg-[#b9b9b9] p-2 rounded-md">
            <HiOutlineTrash className="text-lg"/>
          </div>
      </div>
      </div>
    </div>
  );
}
