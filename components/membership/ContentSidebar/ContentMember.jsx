"use client";

// ** Import Components
import NavLeft from "../NavLeft/NavLeft";
import EditModalEducation from "../ModalEducation/EditModalEducation";
import ModalEducation from "../ModalEducation/ModalEducation";
import ModalExperienceWork from "../ModalExperienceWork/ModalExperienceWork";
import EditModalExperience from "../ModalExperienceWork/EditModalExperience";

// ** Import Zustand
import { useSidebar } from "@/zustand/useSidebar";
import { useModalEducation } from "@/zustand/useModalEducation";
import { useModalExperience } from "@/zustand/useModalExperience";
import { usePhotoProfile } from "@/zustand/usePhotoProfile";
import ModalProfilePicture from "../ModalProfilePicture/ModalProfilePicture";
import ModalPictureKTA from "../ModalPictureKTA/ModalPictureKTA";
import { usePhotoKTA } from "@/zustand/usePhotoKTA";

export default function ContentMember({ children }) {
  const { open } = useSidebar();
  const { photo } = usePhotoProfile();
  const { kta } = usePhotoKTA();
  const { education, isEdit: isEditEducation } = useModalEducation();
  const { experience, isEdit: isEditExperience } = useModalExperience();

  return (
    <div className="relative flex mt-10">
      <div className="mt-6">
        <div className={`fixed ${open ? "w-[18rem]" : "hidden"}`}>
          <NavLeft />
        </div>
      </div>

      {/* Photo Profile */}
      <div
        className={` ${
          !photo ? "hidden" : "fixed -mt-10 w-screen bg-slate-900/75 z-20"
        }`}
      >
        <ModalProfilePicture />
      </div>

      {/* KTA */}
      <div
        className={` ${
          !kta ? "hidden" : "fixed -mt-10 w-screen bg-slate-900/75 z-20"
        }`}
      >
        <ModalPictureKTA />
      </div>

      {/* Education */}
      <div
        className={` ${
          !education ? "hidden" : "fixed -mt-10 w-screen bg-slate-900/75 z-20"
        }`}
      >
        <ModalEducation />
      </div>

      <div
        className={` ${
          !isEditEducation
            ? "hidden"
            : "fixed -mt-10 w-screen bg-slate-900/75 z-20"
        }`}
      >
        <EditModalEducation />
      </div>

      {/* Experience */}
      <div
        className={`${
          !experience ? "hidden" : "fixed -mt-10 w-screen bg-slate-900/75 z-20"
        }`}
      >
        <ModalExperienceWork />
      </div>

      <div
        className={`${
          !isEditExperience
            ? "hidden"
            : "fixed -mt-10 w-screen bg-slate-900/75 z-20"
        }`}
      >
        <EditModalExperience />
      </div>

      <div className={`${open ? "pl-72" : ""} w-full`}>{children}</div>
    </div>
  );
}
