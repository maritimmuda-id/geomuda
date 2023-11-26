"use client";

// ** Import Assets
import assets from "@/assets/assets";

// ** Import Icons
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineClose,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// ** Import Constanst
import { navItemsLeft, navItemsRight } from "@/constanst/navItems";

// ** Import Next
import Image from "next/image";
import Link from "next/link";

// ** Import React
import { useEffect, useState } from "react";

const Navbar = () => {
  // ** Local State
  const [scroll, setScroll] = useState(0);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

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
        className={`flex fixed z-50 top-0 w-full text-white items-center justify-between flex-row-reverse md:flex-row md:justify-center py-2 px-10 md:gap-12 xl:gap-28 ${
          scroll > 0
            ? "bg-gray-900 z-50 transition duration-1000"
            : "bg-transparent duration-500"
        }`}
      >
        <div className="md:basis-5/12">
          <div className="hidden md:flex items-center justify-end gap-[10%]">
            {navItemsLeft.map((item, index) =>
              item.lists ? (
                <div key={item.name} className="relative">
                  <div onClick={() => setDropdown(!dropdown)}>
                    <div className="flex gap-2 items-center hover:text-red-400 cursor-pointer md:text-sm lg:text-base">
                      <h1>
                        {/* About Us */}
                        Tentang
                      </h1>

                      {dropdown ? (
                        <IoIosArrowUp className="w-5 h-5" />
                      ) : (
                        <IoIosArrowDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  {dropdown && (
                    <div
                      key={item.lists.name}
                      className="absolute flex flex-col gap-4 bg-[#111827] mt-11 w-56 rounded-md px-5 py-8 -z-10 text-sm"
                    >
                      {item.lists.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          onClick={() => setDropdown(false)}
                          href={dropdownItem.location}
                          className="cursor-pointer hover:text-red-400 rounded-xl"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}

                      {/* <Link
                        key={index}
                        onClick={() => setDropdown(false)}
                        href={item.lists.location}
                        className="cursor-pointer hover:text-red-400 rounded-xl"
                      >
                        {item.lists.name}
                      </Link> */}

                      <Link
                        key={index}
                        onClick={() => setDropdown(false)}
                        href={item.location}
                        className="cursor-pointer hover:text-red-400 rounded-xl"
                      >
                        {item.name}
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  onClick={() => setDropdown(false)}
                  href={item.location}
                  className="cursor-pointer hover:text-red-400 rounded-xl md:text-sm lg:text-base"
                >
                  {item.name}
                </Link>
              )
            )}
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

        <Image
          src={scroll > 0 ? assets.logoGmiTextWhite : assets.logoGmiWhite}
          className="md:block w-24 md:w-28 md:px-2 lg;:px-1 basis-1/12 ease-in duration-150 transition"
          alt="logo geomuda indonesia white"
        />

        <div className="hidden md:flex items-center justify-start gap-[10%] basis-5/12">
          {navItemsRight.map((item, index) => (
            <Link
              href={item.location}
              key={item.name}
              onClick={() => setDropdown(false)}
              className=" cursor-pointer py-2 hover:text-red-400 rounded-xl md:text-sm lg:text-base"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Section */}
      <nav
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
          {navItemsLeft.map((item, index) =>
            item.lists ? (
              <div
                key={index}
                className="space-y-3"
                onClick={() => setDropdown(!dropdown)}
              >
                <div
                  className={`flex gap-2 items-center ${
                    dropdown && "border-b-2 pb-2"
                  }`}
                >
                  <h1 className="text-lg font-semibold">Tentang</h1>
                  {dropdown ? (
                    <IoIosArrowUp className="w-5 h-5" />
                  ) : (
                    <IoIosArrowDown className="w-5 h-5" />
                  )}
                </div>

                {dropdown && (
                  <div className="flex flex-col space-y-4">
                    {item.lists.map((dropdownItem, index) => (
                      <Link
                        key={index}
                        onClick={() => setDropdown(false)}
                        href={dropdownItem.location}
                        className="cursor-pointer hover:text-red-400 rounded-xl"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                    {/* <Link
                      onClick={() => [setDropdown(false), setOpen(false)]}
                      href={item.lists.location}
                      className="font-semibold"
                    >
                      {item.lists.name}
                    </Link> */}

                    <Link
                      onClick={() => [setDropdown(false), setOpen(false)]}
                      href={item.location}
                      className="font-semibold"
                    >
                      {item.name}
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div key={index} onClick={() => setOpen(false)}>
                <Link href={item.location} className="text-lg font-semibold">
                  {item.name}
                </Link>
              </div>
            )
          )}
          {navItemsRight.map((item, index) => (
            <div>
              <div key={index} onClick={() => setOpen(false)}>
                <Link href={item.location} className="text-lg font-semibold">
                  {item.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
