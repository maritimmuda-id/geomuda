"use client";

// ** Import Next
import Image from "next/image";
import Link from "next/link";

// ** Import Assets
import assets from "@/assets/assets";

// ** Import Icons
import { MdMonitor } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { TbLogout2 } from "react-icons/tb";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const NavLeft = () => {
  const supabase = createClientComponentClient();

  const router = useRouter();

  const handleLogout = async () => {
    Swal.fire({
      icon: "warning",
      text: "Apakah anda yakin ingin keluar?",
      showCancelButton: true,
      confirmButtonColor: '#C93233',
      cancelButtonColor: '#D9D9D9',
      confirmButtonText: 'Ya',
      cancelButtonText: "Tidak",
    }).then((result) => {
      if(result.isConfirmed){
        supabase.auth.signOut().then(() => {
          Swal.fire({
            icon: "success",
            title: "Berhasil",
            text: "Anda Telah Berhasil Logout",
            showConfirmButton: false,
            timer: 1000,
          }).then(() => router.push("/login"));
        });
      }
    })

  };

  return (
    <div className="basis-1/6 bg-[#F1F1F1] py-4 h-screen space-y-10">
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

        <div
          onClick={handleLogout}
          className="p-4 flex cursor-pointer justify-center items-center gap-4 hover:bg-[#7B2418] hover:text-white"
        >
          <TbLogout2 className="text-2xl" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default NavLeft;
