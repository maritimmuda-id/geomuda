// ** Import Assets
import assets from "@/assets/assets";

// ** Import Next
import Image from "next/image";

const About = () => {
  return (
    <div className="px-14 py-20 space-y-10">
      <h1 className="text-center text-4xl text-black font-medium mb-10">
        About Us
      </h1>
      <div className="flex px-32 justify-center items-center gap-20">
        <Image src={assets.aboutContent} alt="tree" className="w-72" />
        <p className="text-xl">
          Asosiasi dibentuk pada tanggal 22-12-2022 (dua puluh dua -bulan
          Desember tahun dua ribu dua puluh dua) di Jakarta.
        </p>
      </div>

      <div className="flex flex-row-reverse px-32 justify-center items-center gap-20">
        <Image src={assets.aboutContent2} alt="tree" className="w-96" />
        <p className="text-xl">
          Asosiasi ini bersifat mandiri, berwawasan kebangsaan sesuai
          Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, dan tidak
          berafiliasi ke partai politik.
        </p>
      </div>
    </div>
  );
};

export default About;
