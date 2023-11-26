"use client";

// ** Import Assests
import assets from "@/assets/assets";

// ** Import Zustand
import { usePhotoKTA } from "@/zustand/usePhotoKTA";

// ** Import Other
import Image from "next/image";
import { IoIosAdd } from "react-icons/io";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef, useState } from "react";
import { nikParser } from "nik-parser";
import Swal from "sweetalert2";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const KTA = ({ user, kta }) => {
  const { user_metadata, id } = user;
  const { setKta, imageUpload } = usePhotoKTA();

  const supabase = createClientComponentClient();

  console.log(id);

  const [nik, setNik] = useState("");
  const [valid, setValid] = useState(false);
  const [loading, setloading] = useState(false);

  const handleCekNik = () => {
    const cekNik = nikParser(nik);

    if (cekNik.isValid()) {
      setValid(true);

      Swal.fire({
        title: "Berhasil",
        text: "Nik Telah Valid",
        icon: "success",
        confirmButtonColor: false,
        timer: 1500,
      });
    } else {
      setValid(false);
      Swal.fire({
        title: "Gagal",
        text: "Nik Tidak Valid",
        icon: "error",
      });
    }
  };

  const handleSubmit = async () => {
    if (valid) {
      const { data, error } = await supabase
        .from("kta")
        .insert({ name: user_metadata.fullname, no_anggota: id.length >= 6 })
        .select();
    }
  };

  const pdfRef = useRef();

  const downloadPdf = () => {
    setloading(true);
    const input = pdfRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("portrait", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 60;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("kta.pdf");

      setloading(false);
    });
  };

  return (
    <>
      <div className="max-w-full rounded-b-xl bg-[#f8f8f8] p-10 min-h-full border-2 -mt-[2px]">
        <div className="mb-10">
          <h2 className="text-xl font-semibold">Kartu Tanda Anggota</h2>
        </div>

        <div className="flex gap-x-10 justify-between w-full">
          <div className="relative z-[1]">
            <Image
              alt="No Picture"
              className="w-56 aspect-[3/4] rounded-xl border-2 border-slate-200 object-cover object-center"
              src={
                !imageUpload
                  ? assets.defaultImage
                  : URL.createObjectURL(imageUpload)
              }
              width={500}
              height={500}
            />

            <button
              className="w-9 aspect-square bg-white border-2 rounded-full absolute -bottom-3 -right-4"
              onClick={setKta}
            >
              <IoIosAdd className="text-green-500 text-3xl mx-auto" />
            </button>
          </div>

          <div className="flex flex-col space-y-4 justify-between w-full">
            <div className="flex flex-col space-y-2 w-full">
              <label>Nama</label>
              <input
                type="text"
                value={user_metadata.fullname}
                disabled
                className="border-2 border-[#00000066] px-3 py-[6px] p-1 rounded-lg w-full"
              />
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <label>Nomor KTP</label>
              <div className="flex gap-x-6">
                <input
                  type="text"
                  value={nik}
                  onChange={(e) => setNik(e.target.value)}
                  className="border-2 border-[#00000066] px-3 py-[6px] p-1 rounded-lg w-full"
                />
                <button
                  onClick={handleCekNik}
                  className="bg-[#7B2418] text-white p-1 rounded-lg w-1/5"
                >
                  Cek
                </button>
              </div>
            </div>
            <button
              disabled={!valid}
              className="bg-[#7B2418] text-white p-2 rounded-lg w-full disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              Buat KTA
            </button>
          </div>
        </div>
      </div>

      {kta > 0 && (
        <div className="max-w-full rounded-xl bg-[#f8f8f8] p-10 min-h-full border-2 mt-6">
          <div
            ref={pdfRef}
            className="absolute -mt-[9999px] md:relative md:-mt-0 w-[914px] h-[589px] mx-auto border-2"
          >
            <div className="relative">
              <Image src={assets.bannerKta} />
              <div className="bg-white w-60 rounded-full h-60 border-8 border-white  absolute -bottom-28 left-10">
                <Image src={assets.peopleKta} className="w-80" />
              </div>
            </div>

            <div className="bg-white rounded-b-3xl">
              <div className="pl-80 pr-10 flex justify-between py-10">
                <div>
                  <h1 className="font-bold text-4xl">Aisyah Zahra</h1>
                  <h1 className="text-[#C93233] text-3xl">
                    Anggota Biasa Geomuda
                  </h1>
                </div>

                <div>
                  <Image src={assets.qr} className="w-20" />
                </div>
              </div>

              <div className="px-16 flex gap-10">
                <div className="flex flex-col gap-8">
                  <div className="space-y-1">
                    <h1>No. Anggota</h1>
                    <p>12345678</p>
                  </div>

                  <div className="space-y-1">
                    <h1>Organisasi Daerah</h1>
                    <p>Jakarta Timur</p>
                  </div>
                </div>

                <div className="border w-[0.1 px] h-44 border-slate-500 "></div>

                <div className="flex flex-col gap-8">
                  <div className="space-y-1">
                    <h1>Tanggal Berlaku</h1>
                    <p>12-20-2023</p>
                  </div>

                  <div className="space-y-1">
                    <h1>Tanggal Berakhir</h1>
                    <p>12-05-2026</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end -mt-16 pr-20 pb-5">
                <Image src={assets.ttd} className="w-28" />
              </div>
            </div>
          </div>

          <button
            className="w-full md:w-[914px] mx-auto md:flex md:justify-center bg-[#7B2418] text-white py-2"
            onClick={downloadPdf}
          >
            {loading ? "Loading..." : "Simpan KTA"}
          </button>
        </div>
      )}
    </>
  );
};

export default KTA;
