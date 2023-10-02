// ** Import Assets
import assets from "@/assets/assets";

// ** Import Next
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <Image
        src={assets.banner}
        alt="banner"
        className="w-full h-screen object-cover object-center"
      />

      <div className="absolute mt-20 top-0 right-0 bottom-0 left-0 flex justify-center items-center text-white flex-col space-y-6 md:space-y-14">
        <h5 className="text-2xl md:text-5xl text-center font-semibold uppercase border-b-2 pb-3">
          Asosiasi Geomuda Indonesia
        </h5>

        <div className="flex justify-start flex-col items-center gap-10">
          <button className="border border-white px-24 md:px-32 rounded-lg py-2 md:py-3">
            Join Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
