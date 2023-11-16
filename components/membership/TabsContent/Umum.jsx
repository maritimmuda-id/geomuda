// ** Import React
import React from "react";

// ** Import Next
import assets from "@/assets/assets";
import Image from "next/image";

// ** Import Compnents
import { IoIosAdd } from "react-icons/io";

// ** Import Other
import Select from "react-select";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { usePhotoProfile } from "@/zustand/usePhotoProfile";

export default function Umum({ countryData, user }) {
  const { country, date, fullname, gender, live, place, picture } =
    user.user_metadata;

  const { setPhoto } = usePhotoProfile();

  const [input, setinput] = React.useState({
    country,
    date,
    fullname,
    gender,
    live,
    place,
  });
  const [loading, setLoading] = React.useState(false);

  const supabase = createClientComponentClient();

  const router = useRouter();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setinput({ ...input, [name]: value });
  };

  const handleUmum = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      data: {
        ...input,
      },
    });

    if (!error) {
      setLoading(false);

      Swal.fire({
        title: "Berhasil",
        text: "Update Profile Berhasil",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      setLoading(false);

      Swal.fire({
        title: "Gagal",
        text: "Gagal Profile Gagal",
        icon: "error",
      });
    }

    router.refresh();
  };

  const optionsCountry = Object.values(countryData.data).map((country) => ({
    value: country.country,
    label: country.country,
  }));

  const optionsGender = [
    {
      value: "Laki-Laki",
      label: "Laki-Laki",
    },
    {
      value: "Perempuan",
      label: "Perempuan",
    },
  ];

  return (
    <>
      <div className="max-w-full rounded-xl bg-[#f8f8f8] p-10 min-h-full border-2 -mt-[2px] rounded-tl-none">
        <div className="flex gap-6">
          <div className="flex flex-col space-y-4">
            <div className="relative z-[1]">
              <Image
                className="w-48 aspect-[3/4] rounded-xl border-2 border-slate-200 object-cover object-center"
                src={picture ? picture : assets.defaultImage}
                width={500}
                height={500}
              />

              <button
                className="w-9 aspect-square bg-white border-2 rounded-full absolute -bottom-3 -right-4"
                onClick={setPhoto}
              >
                <IoIosAdd className="text-green-500 text-3xl mx-auto" />
              </button>
              {/* <button className="text-xs border border-slate-200 p-2 rounded-md bg-slate-50">Ubah Foto</button> */}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{fullname}</h2>
            <p className="text-lg text-[#7B2418] font-medium">
              Anggota Biasa Geomuda Indonesia
            </p>
          </div>
        </div>

        <form onSubmit={handleUmum} className="mt-8 space-y-6">
          <div className="flex flex-col space-y-2">
            <label>Alamat </label>

            <textarea
              name="live"
              value={input.live}
              onChange={handleOnChange}
              cols="10"
              rows={5}
              className="border-2 border-[#00000066]  py-3 px-5 rounded-lg w-full"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-y-6 gap-x-10">
            <div className="flex flex-col space-y-2">
              <label>Tempat Lahir</label>
              <input
                value={input.place}
                onChange={handleOnChange}
                type="text"
                name="place"
                className="border-2 border-[#00000066] px-3 py-[6px] rounded-lg w-full"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label>Tanggal Lahir</label>
              <input
                value={input.date}
                onChange={handleOnChange}
                type="date"
                name="date"
                className="border-2 border-[#00000066] px-3 py-[6px] rounded-lg w-full"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label>Jenis Kelamin</label>
              <Select
                options={optionsGender}
                value={{ label: input.gender }}
                onChange={(e) => setinput({ ...input, gender: e.value })}
                placeholder="Pilih Jenis Kelamin"
                isClearable
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary25: "#E42308 ",
                    primary: "black",
                  },
                })}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    padding: 1,
                    borderRadius: 8,
                    border: "2px solid #00000066",
                  }),
                }}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label>Negara</label>

              <Select
                options={optionsCountry}
                value={{ label: input.country }}
                onChange={(e) => setinput({ ...input, country: e.value })}
                placeholder="Pilih Negara"
                isClearable
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary25: "#E42308 ",
                    primary: "black",
                  },
                })}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    padding: 1,
                    borderRadius: 8,
                    border: "2px solid #00000066",
                  }),
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="col-start-1 col-end-3 bg-[#7B2418] text-white p-2 rounded-lg w-full"
          >
            {loading ? "Loading..." : "Simpan"}
          </button>
        </form>
      </div>
    </>
  );
}
