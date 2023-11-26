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

export default function ContentProfile(props) {
  const { countryData, user, pendidikan, experience, kta } = props;

  const { position } = useTabsProfile();

  let content;

  if (position === 0) {
    content = <Umum countryData={countryData} user={user} />;
  } else if (position === 1) {
    content = <Akun user={user} />;
  } else if (position === 2) {
    content = <KTA user={user} kta={kta} />;
  } else if (position === 3) {
    content = <Pendidikan data={pendidikan} />;
  } else {
    content = <PengalamanKerja data={experience} />;
  }

  return (
    <main className="w-full">
      <TabsProfile />

      {content}
    </main>
  );
}
