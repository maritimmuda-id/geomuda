// ** Import Asset
import assets from "@/assets/assets";

// ** Import Next
import Image from "next/image";
import Link from "next/link";

const BannerActivity = () => {
  return (
    <div>
      <Image
        src={assets.banner2}
        alt="banner"
        className="w-full h-screen object-cover object-center"
      />

      <div className="absolute mt-20 top-0 right-0 bottom-0 left-0 flex justify-center items-center text-white flex-col space-y-6">
        <div className="space-y-7">
          <h5 className="text-5xl md:text-7xl text-center font-bold uppercase">PROGRAM</h5>
          <div className="py-[1px] bg-white w-[22rem] md:w-[40rem]"></div>
        </div>

        <div className="flex justify-start flex-col items-center gap-10 py-5">
          <Link href="/">
            <button className="border font-medium border-white px-20 md:px-32 rounded-3xl py-3">
              HOME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerActivity;
