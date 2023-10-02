"use client";

// ** Import Assets
import assets from "@/assets/assets";

// ** Import Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

// ** Import Constans
import { navItems } from "@/constanst/navItems";

// ** Import Next
import Image from "next/image";
import Link from "next/link";

// ** Import React
import { useEffect, useState } from "react";

const Navbar = () => {
  // ** Local State
  const [scroll, setScroll] = useState(0);
  const [open, setOpen] = useState(false);

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
    <>
      <nav
        className={`flex fixed top-0 w-full text-white items-center justify-between py-1 px-10 md:px-32 ${
          scroll > 0
            ? "bg-gray-900 z-50 transition duration-1000"
            : "bg-transparent duration-500"
        }`}
      >
        <Image
          src={assets.logoGmiWhite}
          className="w-24 md:w-32"
          alt="logo geomuda indonesia white"
        ></Image>

        <div>
          <div className="hidden md:flex items-center gap-5">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.location}
                className="cursor-pointer hover:text-red-400 rounded-xl"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className=" cursor-pointer py-2 hover:text-red-400 rounded-xl"
            >
              Membership
            </Link>
          </div>

          {!open ? (
            <GiHamburgerMenu
              onClick={() => setOpen(true)}
              className="w-7 h-10 md:hidden cursor-pointer"
            />
          ) : (
            <AiOutlineClose
              onClick={() => setOpen(false)}
              className="w-7 h-10 md:hidden cursor-pointer"
            />
          )}
        </div>
      </nav>

      <div
        className={`block space-y-6 md:hidden bg-[#111827] border-r border-slate-600 px-6 py-3 w-60 z-50 fixed top-0  h-screen duration-500  ${
          open ? "ml-0 duration-500" : "-ml-[999px] duration-500 "
        }`}
      >
        <Image
          src={assets.logoGmiWhite}
          className="w-24"
          alt="logo geomuda indonesia white"
        />

        <div className="space-y-6 text-white px-2">
          {navItems.map((nav, index) => (
            <div key={index} onClick={() => setOpen(false)}>
              <Link href={nav.location} className="text-lg font-semibold">
                {nav.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
