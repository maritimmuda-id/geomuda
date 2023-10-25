"use client";

// ** Import React
import { useState } from "react";

// ** Import Other
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

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
    <div>
      <form onSubmit={handleReset}>
        <input
          type="text"
          className="border"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Reset</button>
      </form>
    </div>
  );
}
