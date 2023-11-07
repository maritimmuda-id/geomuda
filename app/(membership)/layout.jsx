// ** Import Components
import ContentMember from "@/components/membership/ContentSidebar/ContentMember";
import NavMember from "@/components/membership/NavMember/NavMember";

// ** Import Other
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="relative">
      <NavMember user={user} />

      <ContentMember>{children}</ContentMember>
    </main>
  );
}
