"use client";

import assets from "@/assets/assets";
// ** Import Assets
import { navItems } from "@/constanst/navItems";
import Image from "next/image";
import Link from "next/link";
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
      <Image src={assets.logoGmiWhite} className="w-32"></Image>

      <div className="flex gap-5">
        {navItems.map((item, index) => (
          <div
            key={index}
            // href={item.location}
            className="border cursor-pointer border-white px-4 py-2 rounded-xl"
          >
            {item.name}
          </div>
        ))}
        <Link href="/login" className="border cursor-pointer border-white px-4 py-2 rounded-xl">Membership</Link>
      </div>
    </nav>
  );
};

export default Navbar;
