// ** Import Assets
import assets from "@/assets/assets";

// ** Import Next
import Image from "next/image";

const About = () => {
  return (
    <div className="px-14 py-20 space-y-16 md:space-y-10">
      <h1 className="text-center text-3xl md:text-4xl text-black font-medium mb-10">
        {/* About Us */}
        Tentang Kami
      </h1>

      <div className="block md:flex md:px-32 justify-center items-center gap-20">
        <Image
          src={assets.aboutContent}
          alt="tree"
          className="w-[35%] mx-auto"
        />
        <p className="md:text-xl">
          Asosiasi Geomuda Indonesia dibentuk pada tanggal 22 Desember 2022 di Jakarta.
        </p>
      </div>

      <div className="block md:flex md:flex-row-reverse md:px-32 justify-center items-center gap-20">
        <Image
          src={assets.aboutContent2}
          alt="tree"
          className="w-[60%] mx-auto"
        />
        <p className="md:text-xl">
          Asosiasi ini bersifat mandiri, berwawasan kebangsaan sesuai
          Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, dan tidak
          berafiliasi ke partai politik.
        </p>
      </div>
    </div>
  );
};

export default About;
