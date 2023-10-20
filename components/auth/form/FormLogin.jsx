"use client";

// ** Import Other
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useFakeLogin } from "@/zustand/useFakeLogin";
import { useRouter } from "next/navigation";

export default function FormLogin() {
  const schema = yup.object({
    email: yup
      .string()
      .email("Masukan Email Yang Valid")
      .required("Harap Masukan Email Anda"),
    password: yup
      .string()
      .min(8, "Minimal Password 8 Kata")
      .required("Harap Masukan Password Anda"),
  });

  const { data: user } = useFakeLogin();

  const router = useRouter();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { email, password } = data;

    if (user?.email === email && user?.password === password) {
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Login Telah Berhasil",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => router.push("/dashboard"));
    } else {
      Swal.fire({
        icon: "error",
        title: "Gagal Login",
        text: "Email Atau Password Salah",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center flex-col mx-auto"
    >
      <label className="mb-1 flex items-center">
        Email
        {errors?.email && (
          <span className="text-red-600 text-sm ml-2">{`* ${errors.email.message}`}</span>
        )}
      </label>
      <input
        type="email"
        {...register("email")}
        placeholder="Enter your email"
        className={`border-2 ${
          errors.email ? "border-red-600" : "border-slate-300"
        } rounded-xl p-2 mb-4 text-sm pl-3 focus:outline-none`}
      />

      <label className="mb-1 flex items-center">
        Password
        {errors?.password && (
          <span className="text-red-600 text-sm ml-2">{`* ${errors.password.message}`}</span>
        )}
      </label>
      <input
        type="password"
        {...register("password")}
        placeholder="Enter your password"
        className={`border-2 ${
          errors.password ? "border-red-600" : "border-slate-300"
        } rounded-xl p-2 mb-4 text-sm pl-3 focus:outline-none`}
      />
      <button
        type="submit"
        className="bg-[#7B2418] text-white rounded-xl p-2 mb-4"
      >
        Login
      </button>
    </form>
  );
}
