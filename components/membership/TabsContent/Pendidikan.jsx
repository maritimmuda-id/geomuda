import { AiOutlinePlus } from "react-icons/ai";

export default function Pendidikan() {
  return (
    <div className="shadow-xl max-w-full rounded-xl bg-[#f8f8f8] p-8 min-h-full border-2 -mt-[10px]">
      <div className="flex justify-between items-center">
        <h2 className="text-xl">Daftar Riwayat Pendidikan</h2>
        <button className="flex justify-between items-center bg-[#7B2418] p-2 rounded-md space-x-2 text-white">
          <AiOutlinePlus className="text-sm" />
          <span className="text-sm">Tambah</span>
        </button>
      </div>
    </div>
  );
}
