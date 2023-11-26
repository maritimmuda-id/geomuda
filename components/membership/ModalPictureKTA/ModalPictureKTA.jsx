"use client";

// ** Import React
import { useState } from "react";

// ** Import Other
import Image from "next/image";
import { IoMdClose, IoMdSave } from "react-icons/io";
import assets from "@/assets/assets";
import { usePhotoKTA } from "@/zustand/usePhotoKTA";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const ModalPictureKTA = () => {
  const { setKta, setImageUpload, setLinkImage } = usePhotoKTA();

  const [image, setImage] = useState();
  const [readyImage, setReadyImage] = useState();

  const [loading, setLoading] = useState(false);

  const supabase = createClientComponentClient();

  const router = useRouter();

  const ImageChangeHandler = (e) => {
    const img = e.target.files[0];
    setReadyImage(img);
    setImage(URL.createObjectURL(img));
  };

  const handleSave = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { data, error } = await supabase.storage
      .from("photos")
      .upload(`kta/${readyImage.name}`, readyImage, {
        upsert: true,
      });

    if (!error) {
      const getImages = supabase.storage.from("photos").getPublicUrl(data.path);

      setImage(null);
      setKta();
      setImageUpload(readyImage);
      setLinkImage(getImages.data.publicUrl);

      Swal.fire({
        title: "Berhasil",
        text: "Berhasil Mengupload Gambar",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });

      setLoading(false);
    } else {
      Swal.fire({
        title: "Gagal",
        text: error.message,
        icon: "error",
      });

      setLoading(false);
    }

    router.refresh();
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen z-20">
      <div className="w-5/12 space-y-5 border-2 py-6 px-6 rounded-xl bg-white">
        <div className="border-b-2 pb-4 flex justify-between">
          <h1 className="text-lg">Unggah Foto KTA</h1>
          <button className="text-xl" onClick={setKta}>
            <IoMdClose />
          </button>
        </div>

        <div className="flex space-x-5 gap-2">
          <div className="relative w-36 aspect-[3/4]">
            <Image
              alt="No Picture"
              src={image ?? assets.defaultImage}
              className={`aspect-[3/4] border-2 rounded-md text-sm object-cover object-center ${
                !image && "flex justify-center items-center"
              }`}
              fill
            />
          </div>
          <div className="text-red-800 text-xs">
            <h2 className="text-base font-medium text-black">Syarat :</h2>
            <ul>
              <li>Ukuran gambar harus di bawah 500kb</li>
              <li>Gambar harus 3 x 4</li>
            </ul>
          </div>
        </div>
        <input
          name="position"
          type="file"
          accept="image/*"
          onChange={ImageChangeHandler}
          className={`border-2 bg-[#E7E7E7] p-2 rounded-lg w-full text-sm font-light`}
        />

        <button
          onClick={handleSave}
          className="flex justify-between items-center gap-x-2 border-2 bg-[#7B2418] text-white p-2 rounded-lg"
        >
          <IoMdSave />
          <p className="text-sm">{loading ? "Loading..." : "Simpan"}</p>
        </button>
      </div>
    </div>
  );
};

export default ModalPictureKTA;
