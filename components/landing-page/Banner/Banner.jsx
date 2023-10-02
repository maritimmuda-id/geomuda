// ** Import Assets
import assets from "@/assets/assets";

// ** Import Next
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <Image
        src={assets.banner}
        alt="banner"
        className="w-full h-screen object-cover object-center"
      />

      <div className="absolute mt-20 top-0 right-0 bottom-0 left-0 flex justify-center items-center text-white flex-col space-y-6">
        <div className="space-y-7">
          <h5 className="text-2xl md:text-5xl text-center font-semibold uppercase">
            Asosiasi Geomuda Indonesia
          </h5>
          <div className="py-[1px] bg-white w-[28rem] md:w-[48rem] mx-auto"></div>
        </div>

        <div className="flex justify-start flex-col items-center gap-10">
          <Link href="/login">
            <button className="border border-white px-24 md:px-32 rounded-lg py-2 md:py-3">
              Join Us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
