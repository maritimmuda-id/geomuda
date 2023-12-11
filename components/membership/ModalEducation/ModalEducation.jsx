// ** Import React
import React from "react";

// ** Import Other
import { useModalEducation } from "@/zustand/useModalEducation";
import { IoMdClose, IoMdSave } from "react-icons/io";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Swal from "sweetalert2";

const ModalEducation = () => {
  const schema = yup.object({
    name: yup
      .string()
      .min(4, "Minimal 4 Kata")
      .required("Harap Masuka Nama Instuisi"),
    study_program: yup
      .string()
      .min(4, "Minimal 4 Kata")
      .required("Harap Masukan Studi Program"),
    education: yup
      .string()
      .min(2, "Minimal 2 Kata")
      .required("Harap Masukan Tingkat Pendidikan"),
    graduate_date: yup.string().required("Harap Masukan Tanggal Lulus"),
  });

  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const supabase = createClientComponentClient();

  const { setEducation } = useModalEducation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (input) => {
    setLoading(true);

    const { error } = await supabase
      .from("pendidikan")
      .insert({ ...input })
      .select();

    if (!error) {
      Swal.fire({
        title: "Berhasil",
        icon: "success",
        text: "Data Berhasil Ditambahkan",
      });

      reset();

      setEducation();

      setLoading(false);
    } else {
      Swal.fire({
        title: "Gagal",
        icon: "error",
        text: error.message,
      });

      setLoading(false);
    }

    router.refresh();
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen z-20">
      <div className="w-7/12 space-y-5 border-2 py-6 px-6 rounded-xl bg-white">
        <div className="border-b-2 pb-4 flex justify-between">
          <h1 className="text-lg">Tambah Riwayat Pendidikan</h1>
          <button className="text-xl" onClick={setEducation}>
            <IoMdClose />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 py-5">
            <div className="flex flex-col space-y-3">
              <label className="">
                Nama Institusi Pendidikan{" "}
                {errors.name && (
                  <span className="text-red-600">{`*${errors.name.message}`}</span>
                )}
              </label>
              <input
                name="name"
                {...register("name")}
                type="text"
                className={`border-2 ${
                  errors.name ? "border-red-600" : "border-[#00000053]"
                } bg-[#E7E7E7] p-2 rounded-lg w-full text-sm font-light `}
              />
            </div>

            <div className="flex flex-col space-y-3">
              <label className="">
                Program Studi{" "}
                {errors.study_program && (
                  <span className="text-red-600">{`*${errors.study_program.message}`}</span>
                )}
              </label>
              <input
                name="study_program"
                type="text"
                {...register("study_program")}
                className="border-2 border-[#00000053] bg-[#E7E7E7] p-2 rounded-lg w-full text-sm font-light "
              />
            </div>

            <div className="flex flex-col space-y-3">
              <label className="">
                Tingkat Pendidikan{" "}
                {errors.education && (
                  <span className="text-red-600">{`*${errors.education.message}`}</span>
                )}
              </label>
              <select
                type="text"
                name="education"
                {...register("education", { required: true })}
                className="border-2 border-[#00000053] bg-[#E7E7E7] p-2 rounded-lg w-full text-sm font-light "
              >
                <option value={""}>Pilih Tingkat Pendidikan...</option>
                <option value={"SMA/Sederajat"}>SMA/Sederajat</option>
                <option value={"D3 - Diploma 3"}>D3 - Diploma 3</option>
                <option value={"S1 - Sarjana"}>S1 - Sarjana</option>
                <option value={"S2 - Magister"}>S2 - Magister</option>
                <option value={"S3 - Doktor"}>S3 - Doktor</option>
              </select>
            </div>

            <div className="flex flex-col space-y-3">
              <label className="">
                Tanggal Lulus{" "}
                {errors.graduate_date && (
                  <span className="text-red-600">{`*${errors.graduate_date.message}`}</span>
                )}
              </label>
              <input
                name="graduate_date"
                {...register("graduate_date")}
                type="date"
                className="border-2 border-[#00000053] bg-[#E7E7E7] p-2 rounded-lg w-full text-sm font-light "
              />
            </div>
          </div>

          <button className="flex justify-between items-center gap-x-2 border-2 bg-[#7B2418] text-white p-2 rounded-lg">
            <IoMdSave />
            <p className="text-sm">{loading ? "Loading..." : "Simpan"}</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalEducation;
