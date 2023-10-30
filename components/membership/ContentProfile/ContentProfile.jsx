"use client";

// ** Import Components
import TabsProfile from "../ui/TabsProfile";
import Umum from "../TabsContent/Umum";
import Pendidikan from "../TabsContent/Pendidikan";
import PengalamanKerja from "../TabsContent/PengalamanKerja";

// ** Import Zustand
import { useTabsProfile } from "@/zustand/useTabsProfile";
import Akun from "../TabsContent/Akun";
import KTA from "../TabsContent/KTA";

export default function ContentProfile() {
  const { position } = useTabsProfile();

  let content;

  if (position === 0) {
    content = <Umum />;
  } else if (position === 1) {
    content = <Akun />
  } else if(position === 2) {
    content = <KTA />
  } else if(position === 3) {
    content = <Pendidikan />;
  } else {
    content = <PengalamanKerja />;
  }

  return (
    <main className="w-full">
      <TabsProfile />

      {content}
    </main>
  );
}
