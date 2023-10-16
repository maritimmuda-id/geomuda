// ** Import Next
import Image from "next/image";
import Link from "next/link";

// ** Import Assets
import assets from "@/assets/assets";

// ** Import Icons
import { MdMonitor } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { TbLogout2 } from "react-icons/tb";

const NavLeft = () => {
  return (
    <div className="basis-1/6 bg-[#F1F1F1] py-4 max-h-max space-y-10">
      <div className="py-8 space-y-4">
        <Image src={assets.logoGmiDefault} className="w-4/6 mx-auto"></Image>
        <h3 className="text-lg text-center">Geomuda Indonesia</h3>
      </div>

      <div className="space-y-4">
        <Link
          href="/dashboard"
          className="p-4 flex justify-center items-center gap-4 hover:bg-[#7B2418] hover:text-white "
        >
          <MdMonitor className="text-2xl" />
          <p>Dashboard</p>
        </Link>

        <Link
          href="/profile"
          className="p-4 flex justify-center items-center gap-4 hover:bg-[#7B2418] hover:text-white"
        >
          <HiOutlineUser className="text-2xl" />
          <p>Profile</p>
        </Link>

        <Link
          href="/login"
          className="p-4 flex justify-center items-center gap-4 hover:bg-[#7B2418] hover:text-white"
        >
          <TbLogout2 className="text-2xl" />
          <p>Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default NavLeft;
