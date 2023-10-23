import ContentSidebar from "@/components/membership/ContentSidebar/ContentSidebar";
// ** Import Components
import NavMember from "@/components/membership/NavMember/NavMember";
import {
  createClientComponentClient,
  createServerActionClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// ** Import Other

export default async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect("/login");
  }

  const user = data.session.user;

  return (
    <main className="relative">
      <NavMember user={user} />

      <ContentSidebar>{children}</ContentSidebar>
    </main>
  );
}
