"use client";

// ** Import Constants
import { tabsProfile } from "@/constanst/tabs-profile";

// ** Import Zustand
import { useTabsProfile } from "@/zustand/useTabsProfile";

export default function TabsProfile() {
  const { position, setPosition } = useTabsProfile();

  return (
    <ul className="flex items-center">
      {tabsProfile.map((tab, index) => (
        <li
          onClick={() => setPosition(index)}
          key={index}
          className={`p-3 cursor-pointer px-6 border-2  ${
            position === index ? "bg-[#7B2418] text-white" : "bg-[#f8f8f8]"
          }  hover:bg-[#7B2418] hover:text-white ${
            index === 4 && "rounded-tr-xl"
          } ${index === 0 && "rounded-tl-xl"}`}
        >
          {tab.name}
        </li>
      ))}
    </ul>
  );
}
