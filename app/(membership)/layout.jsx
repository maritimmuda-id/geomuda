"use client";

// ** Import Components
import NavLeft from "@/components/membership/NavLeft/NavLeft";
import NavMember from "@/components/membership/NavMember/NavMember";

// ** Import Other
import { useFakeLogin } from "@/zustand/useFakeLogin";
import { useSidebar } from "@/zustand/useSidebar";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const { open } = useSidebar();
  const { data: user } = useFakeLogin();

  const router = useRouter();

  if (!user) {
    router.push("/login");
  }

  return (
    <main className="relative">
      <NavMember />

      <div className="flex mt-10">
        <div className="mt-6">
          <div className={`fixed ${open ? "w-[18rem]" : "hidden"}`}>
            <NavLeft />
          </div>
        </div>

        <div className={`${open ? "pl-72" : ""} w-full`}>{children}</div>
      </div>
    </main>
  );
}
