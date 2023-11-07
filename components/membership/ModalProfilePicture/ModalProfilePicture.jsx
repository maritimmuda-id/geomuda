import { usePhotoProfile } from "@/zustand/usePhotoProfile"
import Image from "next/image";
import { useState } from "react";
import { IoMdClose, IoMdSave } from "react-icons/io";


const ModalProfilePicture = () => {
  const { setPhoto } = usePhotoProfile();

  const [image, setImage] = useState();

  const ImageChangeHandler = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen z-20">
      <div className="w-5/12 space-y-5 border-2 py-6 px-6 rounded-xl bg-white">
        <div className="border-b-2 pb-4 flex justify-between">
          <h1 className="text-lg">Unggah Foto Profil</h1>
          <button className="text-xl" onClick={setPhoto}>
            <IoMdClose />
          </button>
        </div>

        <form className="space-y-5">
          <div className="flex space-x-5 gap-2">
            <div className="relative w-36 aspect-[3/4]">
              <Image alt="No Picture" src={image} className={`aspect-[3/4] border-2 rounded-md text-sm ${!image && "flex justify-center items-center" }`} fill/>
            </div>
            <div className="text-red-800 text-xs">
              <h2 className="text-base font-medium text-black">Syarat :</h2>
              <ul >
                <li>Ukuran gambar harus di bawah 1MB</li>
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
            type="submit"
            className="flex justify-between items-center gap-x-2 border-2 bg-[#7B2418] text-white p-2 rounded-lg"
          >
            <IoMdSave />
            <p className="text-sm">Simpan</p>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ModalProfilePicture