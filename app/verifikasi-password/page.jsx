"use client";

// ** Import React
import { useState } from "react";

// ** Import Other
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Image from "next/image";
import assets from "@/assets/assets";
import Link from "next/link";

export default function VerifikasiPassword() {
  const [input, setInput] = useState("");

  const supabase = createClientComponentClient();

  const router = useRouter();

  const handleReset = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.updateUser({ password: input });

    if (!error) {
      Swal.fire({
        title: "Berhasil",
        text: "Password berhasil direset",
        icon: "success",
      }).then(() => router.push("/dashboard"));
    } else {
      Swal.fire({
        title: "Gagal",
        text: error.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex space-x-10 max-w-3xl bg-slate-50 px-8 py-14 rounded-2xl shadow-xl border-2 border-slate-200">
        <Image src={assets.logoGmiDefault} alt="geomuda logo" className="w-60 p-4" />
        <div className="space-y-4">
          <h1 className="text-xl text-center font-bold pb-4">Atur Ulang Kata Sandi</h1>

          <form onSubmit={handleReset}>
            <label className="mb-1 flex items-center text-sm">Kata Sandi</label>
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Masukkan password barumu"
              className="border-2 border-slate-300 rounded-lg p-2 text-sm pl-3 mb-4 focus:outline-none w-full placeholder:text-sm"
            />

            {/* <label className="mb-1 flex items-center text-sm">Konfirmasi Kata Sandi</label>
          <input
            type="password"
            value={inputConfirm}
            onChange={(e) => setInputConfirm(e.target.value)}
            placeholder="Masukkan password barumu lagi"
            className="border-2 border-slate-300 rounded-lg p-2 text-sm pl-3 mb-5 focus:outline-none w-full placeholder:text-sm"
          /> */}

            <button type="submit" className="bg-[#7B2418] text-white rounded-lg text-sm p-2 w-full">
              Atur Ulang
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
