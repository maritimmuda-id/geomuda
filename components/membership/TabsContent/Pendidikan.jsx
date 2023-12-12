// ** Import React
import React from "react";

// ** import Icons
import { PiGraduationCap } from "react-icons/pi";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";

// ** Import Other
import { useModalEducation } from "@/zustand/useModalEducation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function Pendidikan({ data }) {
  const { setEducation, setData, setIsEdit } = useModalEducation();

  const supabase = createClientComponentClient();

  const router = useRouter();

  const handleDelete = async (id) => {
    Swal.fire({
      icon: "warning",
      text: "Apakah anda yakin ingin menghapus?",
      showCancelButton: true,
      confirmButtonColor: "#C93233",
      cancelButtonColor: "#D9D9D9",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { error } = await supabase
          .from("pendidikan")
          .delete()
          .eq("id", id);

        if (!error) {
          Swal.fire({
            title: "Berhasil",
            icon: "success",
            text: "Data Berhasil Dihapus",
          });
        } else {
          Swal.fire({
            title: "Gagal",
            icon: "error",
            text: error.message,
          });
        }

        router.refresh();
      }
    });
  };

  const handleEdit = (val) => {
    setData(val);
    setIsEdit();
  };

  return (
    <div className="shadow-xl max-w-full rounded-xl rounded-tl-none bg-[#f8f8f8] p-10 min-h-full border-2 -mt-[2px]">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl font-medium">Daftar Riwayat Pendidikan</h2>
        <button
          className="flex justify-between items-center bg-[#7B2418] p-2 rounded-md space-x-2 text-white"
          onClick={setEducation}
        >
          <AiOutlinePlus className="text-sm" />
          <span className="text-sm">Tambah</span>
        </button>
      </div>

      <div className="space-y-5">
        {
          data && data.length > 0 ? (
            <>
              {data.map((pendidikan) => (
              <div
                key={pendidikan.id}
                className="rounded-xl py-6 px-8 w-full bg-[#f1f1f1] shadow-md border-2 flex justify-between"
              >
                <div className="grid grid-cols-2 justify-between w-full items-center">
                  <div className="flex flex-col gap-5">
                    <h4 className="text-lg">{pendidikan.name}</h4>
    
                    <div className="flex items-center gap-2 text-[#5c5c5c]">
                      <PiGraduationCap />
                      <p>{pendidikan.study_program}</p>
                    </div>
                  </div>
    
                  <div className="flex flex-col gap-5">
                    <p className="text-md text-slate-800">{pendidikan.education}</p>
                    <p className="text-sm text-[#5c5c5c]">
                      {pendidikan.graduate_date}
                    </p>
                  </div>
                </div>
    
                <div className="flex flex-col items-end  gap-y-2">
                  <div className="cursor-pointer  bg-[#b9b9b9] p-2 rounded-md">
                    <HiOutlinePencil
                      onClick={() => handleEdit(pendidikan)}
                      className="text-lg"
                    />
                  </div>
    
                  <div
                    onClick={() => handleDelete(pendidikan.id)}
                    className="cursor-pointer self-center bg-[#b9b9b9] p-2 rounded-md"
                  >
                    <HiOutlineTrash className="text-lg" />
                  </div>
                </div>
              </div>
              ))}
            </>
          )

          : (
            <p className="text-center italic text-gray-500 p-4">Tidak ada riwayat pendidikan</p>
          )
        }
      </div>
    </div>
  );
}
