"use client";

// ** Import Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChevronDoubleRight } from "react-icons/bs";

// ** Import Zustand
import { useSidebar } from "@/zustand/useSidebar";

const NavMember = () => {
  const { open, setOpen } = useSidebar();

  return (
    <div className="bg-[#7B2418] fixed top-0 w-full border-b border-gray-300  p-5 flex justify-between items-center px-10">
      {open ? (
        <GiHamburgerMenu
          onClick={setOpen}
          className="text-white text-2xl cursor-pointer"
        />
      ) : (
        <BsChevronDoubleRight
          onClick={setOpen}
          className="text-white text-2xl cursor-pointer"
        />
      )}

      <button className="text-white">User</button>
    </div>
  );
};

export default NavMember;
