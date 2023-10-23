"use client";

// ** Import Next
import { useRouter } from "next/navigation";

// ** Import Other
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function FormRegister() {
  const supabase = createClientComponentClient();

  const schema = yup.object({
    fullname: yup
      .string()
      .min(2, "Minimal Huruf 2 Kata")
      .max(45, "Maksimal Huruf 30 Kata")
      .required("Harap Masukan Nama Lengkap Anda"),
    email: yup
      .string()
      .email("Masukan Email Yang Valid")
      .required("Harap Masukan Email Anda"),
    password: yup
      .string()
      .min(8, "Minimal Password 8 Kata")
      .required("Harap Masukan Password Anda"),
    confirmPassword: yup
      .string()
      .min(8, "Minimal Password 8 Kata")
      .oneOf([yup.ref("password")], "Password Tidak Sama")
      .required("Harap Masukan Confirm Password Anda"),
  });

  const router = useRouter();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (input) => {
    const { error } = await supabase.auth.signUp({
      email: input.email,
      password: input.confirmPassword,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
        data: {
          fullname: input.fullname,
        },
      },
    });

    if (!error) {
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Registrasi Telah Berhasil",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => router.push("/login"));
    }

    router.refresh();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-center flex-col mx-auto"
    >
      <label className="mb-1 flex items-center">
        Full Name
        {errors?.fullname && (
          <span className="text-red-600 text-sm ml-2">{`* ${errors.fullname.message}`}</span>
        )}
      </label>
      <input
        type="text"
        placeholder="Enter your full name"
        className={`border-2 ${
          errors.fullname ? "border-red-600" : "border-slate-300"
        } rounded-xl p-2 mb-4 text-sm pl-3 focus:outline-none`}
        {...register("fullname")}
      />

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

      <label className="mb-1 flex items-center">
        Confirm Password
        {errors?.confirmPassword && (
          <span className="text-red-600 text-sm ml-2">{`* ${errors.confirmPassword.message}`}</span>
        )}
      </label>
      <input
        type="password"
        {...register("confirmPassword")}
        placeholder="Enter your password again"
        className={`border-2 ${
          errors.confirmPassword ? "border-red-600" : "border-slate-300"
        } rounded-xl p-2 mb-4 text-sm pl-3 focus:outline-none`}
      />
      <button
        type="submit"
        className="bg-[#7B2418] text-white rounded-xl p-2 mb-1"
      >
        Register
      </button>
    </form>
  );
}
