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
          <h5 className="text-7xl text-center font-bold uppercase">Activity</h5>
          <div className="py-[1px] bg-white w-[40rem]"></div>
        </div>

        <div className="flex justify-start flex-col items-center gap-10 py-5">
          <Link href="/">
            <button className="border bg-green-700/50 border-white px-32 rounded-full py-3">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerActivity;
