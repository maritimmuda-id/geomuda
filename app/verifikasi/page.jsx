// ** Import Other
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Verifikasi() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <h1 className="text-2xl">Verifikasi Email Berhasil</h1>
      <Link href="/dashboard" className="p-3 bg-red-600 text-white rounded-lg">
        Lanjutkan Ke Dashboard
      </Link>
    </div>
  );
}
