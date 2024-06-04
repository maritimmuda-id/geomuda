import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function HeadDashboard() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getSession();

  const user = data.session?.user.user_metadata;

  return (
    <div className="space-y-2 mb-14">
      <h1 className="text-4xl mb-6">Dashboard</h1>
      <p>Halo {user.fullname},</p>
      <p>Selamat datang di dashboard Geomuda</p>
    </div>
  );
}
