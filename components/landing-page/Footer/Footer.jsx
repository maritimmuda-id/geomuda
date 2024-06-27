// ** Import Assets
import assets from "@/assets/assets";

// ** Import Next
import Image from "next/image";
import Link from "next/link";

// ** Import Icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill, RiFacebookBoxFill, RiYoutubeFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-gray-900 py-16 md:pt-20 pb-10 px-10 md:px-16 text-white md:space-y-16">
      <div className="flex flex-col">
        <div className="flex flex-col justify-evenly md:flex-row gap-10 lg:gap-24">
          <div className="md:flex md:flex-col justify-start items-start space-y-2 col-start-1 col-end-3 md:col-start-auto md:col-end-auto">
            <Image
              src={assets.logoGmiTextWhite}
              className="w-28 -mt-2 md:-mt-9 mx-auto md:mx-0"
              alt="logo geomuda indonesia text white"
            />
            <h4 className="font-semibold text-xl text-center md:text-left">Asosiasi Geomuda Indonesia</h4>
            <p className="text-sm text-center md:text-left">Organisasi Kepemudaan Peduli Kebumian</p>
          </div>

          <div className="space-y-5">
            <h4 className="font-semibold text-lg">Website</h4>
            <div className="space-y-1 text-sm flex flex-col">
              <Link href="/">
                <p className="hover:text-red-400 duration-200">Beranda</p>
              </Link>
              <Link href="/program">
                <p className="hover:text-red-400 duration-200">Program</p>
              </Link>
              <Link href="/about">
                <p className="hover:text-red-400 duration-200">Tentang</p>
              </Link>
              <Link href="/login">
                <p className="hover:text-red-400 duration-200"> Keanggotaan</p>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-lg">
              {/* ADDRESS */}
              Alamat
            </h4>
            <p className="text-sm">
              Indonesia Blue Economy Center Kampus C STIE Indonesia
              <br />
              Kel. Rawamangun, Kec. Pulo Gadung, Jakarta 13220
            </p>
          </div>

          <div className="space-y-5 col-start-1 col-end-3 md:col-start-auto md:col-end-auto">
            <h4 className="font-semibold text-lg">
              {/* CONTACT */}
              Kontak
            </h4>
            <ul className="space-y-1 text-sm">
              <li className="flex gap-2 hover:text-red-400 cursor-pointer duration-200">
                <BsFillTelephoneFill />
                <a href="tel:021-489-1137">021-489-1137</a>
              </li>
              <li className="flex gap-2 hover:text-red-400 cursor-pointer duration-200">
                <MdEmail />
                <a href="mailto:admin@geomuda.id">admin@geomuda.id</a>
              </li>
              <li className="flex gap-3 text-2xl pt-2">
                <Link
                  href="https://www.instagram.com/geomuda.id/"
                  target="_blank"
                  className="hover:text-red-400 duration-200"
                >
                  <RiInstagramFill />
                </Link>
                <Link href="#" className="hover:text-red-400 duration-200">
                  <RiFacebookBoxFill />
                </Link>
                <Link href="#" className="hover:text-red-400 duration-200">
                  <RiYoutubeFill />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-[1px] bg-[#DADADA] my-8"></div>

        <div>
          <p className="font-medium text-sm text-center">© 2023 Asosiasi Geomuda Indonesia. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
