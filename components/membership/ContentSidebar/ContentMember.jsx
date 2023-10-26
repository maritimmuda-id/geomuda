"use client";

// ** Import Components
import NavLeft from "../NavLeft/NavLeft";

// ** Import Zustand
import { useSidebar } from "@/zustand/useSidebar";
import ModalEducation from "../ModalEducation/ModalEducation";
import { useModalEducation } from "@/zustand/useModalEducation";
import ModalExperienceWork from "../ModalExperienceWork/ModalExperienceWork";
import { useModalExperience } from "@/zustand/useModalExperience";

export default function ContentMember({ children }) {
  const { open } = useSidebar();
  const { education } = useModalEducation();
  const { experience } = useModalExperience();

  return (
    <div className="flex mt-10">
      <div className="mt-6">
        <div className={`fixed ${open ? "w-[18rem]" : "hidden"}`}>
          <NavLeft />
        </div>
      </div>
      <div className={`fixed ${education ? "hidden" : "w-screen" }`}>
        <ModalEducation />
      </div>
      <div className={`fixed ${experience ? "hidden" : "w-screen" }`}>
        <ModalExperienceWork />
      </div>
      <div className={`${open ? "pl-72" : ""} w-full`}>{children}</div>
    </div>
  );
}
