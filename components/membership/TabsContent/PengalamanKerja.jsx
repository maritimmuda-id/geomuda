// ** Import Icons
import { useModalExperience } from "@/zustand/useModalExperience";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { AiOutlinePlus } from "react-icons/ai";
import { GrOrganization } from "react-icons/gr";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import Swal from "sweetalert2";

export default function PengalamanKerja({ data }) {
  const {
    setExperience,
    setIsEdit,
    setData,
    data: dataState,
  } = useModalExperience();

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
          .from("experience")
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
        <h2 className="text-xl font-medium">Daftar Riwayat Pekerjaan</h2>
        <button
          className="flex justify-between items-center bg-[#7B2418] p-2 rounded-md space-x-2 text-white"
          onClick={setExperience}
        >
          <AiOutlinePlus className="text-sm" />
          <span className="text-sm">Tambah</span>
        </button>
      </div>

      <div className="space-y-5">
        {data.map((experience) => (
          <div
            key={experience.id}
            className="rounded-xl py-6 px-8 w-full bg-[#f1f1f1] shadow-md border-2 flex justify-between"
          >
            <div className="grid grid-cols-2 items-center">
              <div className="space-y-3">
                <h4 className="text-lg">{experience.position}</h4>

                <div className="flex items-center gap-2 text-[#5c5c5c]">
                  <GrOrganization />
                  <p>{experience.institution}</p>
                </div>
              </div>

              <p className="text-sm text-[#5c5c5c] justify-self-end">
                {experience.start_date} - {experience.end_date}
              </p>
            </div>

            <div className="grid justify-items-center gap-y-2">
              <div
                onClick={() => handleEdit(experience)}
                className="w-full cursor-pointer self-center bg-[#b9b9b9] p-2 rounded-md"
              >
                <HiOutlinePencil className="text-lg" />
              </div>

              <div
                onClick={() => handleDelete(experience.id)}
                className="w-full self-center bg-[#b9b9b9] cursor-pointer p-2 rounded-md"
              >
                <HiOutlineTrash className="text-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
