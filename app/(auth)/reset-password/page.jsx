"use client";

// ** Import React
import { useState } from "react";

// ** Import Other
import assets from "@/assets/assets";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";

const ResetPassword = () => {
  const [input, setInput] = useState("");
  const supabase = createClientComponentClient();

  const handleReset = async (e) => {
    e.preventDefault();

    await supabase.auth
      .resetPasswordForEmail(input, {
        redirectTo: "http://localhost:3000/verifikasi-password",
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Silahkan Cek Email Anda",
        });
      });
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex space-x-10 max-w-3xl bg-slate-50 px-8 py-16 rounded-2xl shadow-xl border-2 border-slate-200">
        <Image
          src={assets.logoGmiDefault}
          alt="geomuda logo"
          className="w-60 p-4"
        />
        <div className="space-y-4">
          <h1 className="text-xl text-center font-bold pb-4">
            Lupa Kata Sandi
          </h1>
          <p className="pb-4">
            Kami akan mengirimkan email ke akun Anda untuk link reset kata
            sandi, pastikan saja Akun Anda Ada.
          </p>

          <form onSubmit={handleReset}>
            <label className="mb-1 flex items-center">Email</label>
            <input
              type="email"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Masukkan email kamu"
              className="border-2 border-slate-300 rounded-lg p-2 text-sm pl-3 mb-8 focus:outline-none w-full"
            />

            <button
              type="submit"
              className="bg-[#7B2418] text-white rounded-lg text-sm p-2 w-full"
            >
              Kirim Tautan
            </button>
          </form>

          <Link href="/login">
            <button className="bg-[#c3c3c3] rounded-lg text-sm p-2 mt-4 w-full text-black">
              Kembali
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
