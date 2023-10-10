// ** Import Asset
import assets from "@/assets/assets";

// ** Import Next
import Image from "next/image";
import Link from "next/link";

const BannerAbout = () => {
  return (
    <div>
      <Image
        src={assets.banner3}
        alt="banner"
        className="w-full  h-screen object-cover object-center"
      />

      <div className="absolute z-10 mt-20 top-0 right-0 bottom-0 left-0 flex justify-center items-start text-white flex-col space-y-6">
        <div className="space-y-10 md:space-y-7 px-16 md:px-32">
          <h5 className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase text-center md:text-left">
            ABOUT US
          </h5>
          <p className="mx-auto md:mx-0 max-w-2xl text-center md:text-left text-base md:text-lg lg:text-xl tracking-widest">
            Asosiasi Geomuda dibentuk pada tanggal 22-12-2022, dengan fokus
            utama pada penyiapan sumber daya manusia bidang kebumian yang
            profesional, berjiwa kepemimpinan, cinta tanah air, berdaya -saing
            global, dan memiliki kepedulian sosial.
          </p>
    
          <div className="py-5 text-center md:text-left">
            <Link href="/">
              <button className="border font-medium border-white px-16 md:px-32 rounded-full py-3">
                HOME
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAbout;
