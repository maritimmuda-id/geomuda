"use client";

// ** Import Assets
import assets from "@/assets/assets";

// ** Import Constans
import { navItems } from "@/constanst/navItems";

// ** Import Next
import Image from "next/image";
import Link from "next/link";

// ** Import React
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex fixed top-0 w-full text-white items-center justify-between py-1 px-32 ${
        scroll > 0
          ? "bg-gray-900 z-50 transition duration-1000"
          : "bg-transparent duration-500"
      }`}
    >
      <Image src={assets.logoGmiWhite} className="w-32" alt="logo geomuda indonesia white"></Image>

      <div className="flex items-center gap-5">
        {navItems.map((item, index) => (
          <div
            key={index}
            // href={item.location}
            className="cursor-pointer hover:text-red-400 rounded-xl"
          >
            {item.name}
          </div>
        ))}
        <Link
          href="/login"
          className=" cursor-pointer py-2 hover:text-red-400 rounded-xl"
        >
          Membership
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
