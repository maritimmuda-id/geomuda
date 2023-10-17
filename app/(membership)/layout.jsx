"use client";

// ** Import Components
import NavLeft from "@/components/membership/NavLeft/NavLeft";
import NavMember from "@/components/membership/NavMember/NavMember";

// ** Import Zustand
import { useSidebar } from "@/zustand/useSidebar";

export default function DashboardLayout({ children }) {
  const { open } = useSidebar();

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
