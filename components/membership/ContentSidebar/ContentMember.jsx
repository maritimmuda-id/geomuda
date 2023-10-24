"use client";

// ** Import Components
import NavLeft from "../NavLeft/NavLeft";

// ** Import Zustand
import { useSidebar } from "@/zustand/useSidebar";

export default function ContentMember({ children }) {
  const { open } = useSidebar();

  return (
    <div className="flex mt-10">
      <div className="mt-6">
        <div className={`fixed ${open ? "w-[18rem]" : "hidden"}`}>
          <NavLeft />
        </div>
      </div>

      <div className={`${open ? "pl-72" : ""} w-full`}>{children}</div>
    </div>
  );
}
