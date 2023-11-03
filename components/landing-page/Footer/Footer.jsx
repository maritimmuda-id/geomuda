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
        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-6 space-y-3 text-center">
          <div className="md:flex md:flex-col justify-start items-start space-y-2 col-start-1 col-end-3 md:col-start-auto md:col-end-auto">
            <Image
              src={assets.logoGmiTextWhite}
              className="w-28 -mt-2 md:-mt-9 mx-auto md:mx-0"
              alt="logo geomuda indonesia text white"
              />
            <h4 className="font-semibold text-xl text-center md:text-left">Asosiasi Geomuda Indonesia</h4>
            <p className="text-sm text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

          <div className="space-y-5">
            <h4 className="font-semibold text-lg">Website</h4>
              <div className="space-y-1 text-sm flex flex-col">
                <Link href="/">
                  Beranda
                </Link>
                <Link href="/program">
                  Program
                </Link>
                <Link href="/about">
                  Tentang
                </Link>
                <Link href="/login">
                  Membership
                </Link>
              </div>
          </div>

          <div className="space-y-5">
            <h4 className="font-semibold text-lg">
              {/* ADDRESS */}
              Alamat
            </h4>
            <p className="text-sm">
              Indonesia Blue Economy Center Kampus C STIE Indonesia
              Jakarta, Jalan Pratekan No. 9A Kel. Rawamangun, Kec. Pulo Gadung,
              Jakarta 13220
            </p>
          </div>

          <div className="space-y-5 col-start-1 col-end-3 md:col-start-auto md:col-end-auto">
            <h4 className="font-semibold text-lg">
              {/* CONTACT */}
              Kontak
            </h4>
            <ul className="space-y-1 text-sm">
              <li className="flex justify-center items-center gap-2">
                <BsFillTelephoneFill />
                +62-21-489-1137
              </li>
              <li className="flex justify-center items-center gap-2">
                <MdEmail />
                admin@geomuda.id
              </li>
              <li className="flex justify-center items-center gap-3 text-2xl pt-2">
                <Link href="https://www.instagram.com/geomuda.id/" target="_blank">
                  <RiInstagramFill />
                </Link>
                <Link href="#">
                  <RiFacebookBoxFill />
                </Link>
                <Link href="#">
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

      {/* Mobile */}
      {/* <div className="md:hidden flex flex-wrap items-end justify-center gap-10 text-center">
        <div>
          <Image
            src={assets.logoGmiTextWhite}
            className="w-20 mx-auto"
            alt="logo geomuda indonesia text white"
          />

          <div className="py-[1px] bg-white my-4"></div>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Program</li>
            <li>Membership</li>
          </ul>
        </div>

        <div className="mt-7">
          <h4 className="font-bold text-xl">CONTACT</h4>

          <div className="py-[1px] bg-white my-4"></div>
          <ul>
            <li>+62-21-489-1137</li>
            <li>admin@geomuda.id</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl">ADDRESS</h4>

          <div className="py-[1px] bg-white my-4"></div>
          <p>
            Head Office:Indonesia Blue Economy Center Kampus C STIE Indonesia
            Jakarta, Jalan Pratekan No. 9AKel. Rawamangun, Kec. Pulo Gadung,
            Jakarta 13220
          </p>

          <div className="py-[1.25px] bg-[#DADADA] my-4"></div>

          <p>
            National Secretariat:Jalan Pulau Bintan No. 12, Desa Semoi Dua, Kec.
            Sepaku, Kab. Penajam Paser Utara, IKN Nusantara.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
