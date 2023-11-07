// ** Import React
import React from "react";

// ** Import Other
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const ChangePassword = () => {
  const schema = yup.object({
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

  const [loading, setLoading] = React.useState(false);

  const supabase = createClientComponentClient();

  const router = useRouter();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleUpdatePassword = async (input) => {
    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: input.confirmPassword,
    });

    if (!error) {
      setLoading(false);

      Swal.fire({
        title: "Berhasil",
        text: "Update Password Berhasil",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      setLoading(false);

      Swal.fire({
        title: "Gagal",
        text: "Update Password Gagal",
        icon: "error",
      });
    }

    router.refresh();
  };

  return (
    <div className="max-w-full rounded-xl bg-[#f8f8f8] p-10 min-h-full border-2 mt-6">
      <h2 className="text-xl font-medium mb-6">Ubah Password</h2>

      <form
        onSubmit={handleSubmit(handleUpdatePassword)}
        className="space-y-4 my-2"
      >
        <div className="flex flex-col space-y-2">
          <label>
            Password Baru{" "}
            {errors.password && (
              <span className="text-red-600">{`* ${errors.password.message}`}</span>
            )}
          </label>
          <input
            name="password"
            type="password"
            {...register("password")}
            className={`border-2 ${
              errors.password ? "border-red-600" : "border-[#00000066]"
            }  px-3 py-[6px] rounded-lg w-full`}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label>
            Konfirmasi Password Baru{" "}
            {errors.confirmPassword && (
              <span className="text-red-600">{`* ${errors.confirmPassword.message}`}</span>
            )}
          </label>
          <input
            name="confirmPassword"
            type="password"
            {...register("confirmPassword")}
            className={`border-2 ${
              errors.confirmPassword ? "border-red-600" : "border-[#00000066]"
            }  px-3 py-[6px] rounded-lg w-full`}
          />
        </div>
        <button
          type="submit"
          className="bg-[#7B2418] text-white p-2 rounded-lg w-full"
        >
          {loading ? "Loading..." : "Simpan"}
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
