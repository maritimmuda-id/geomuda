// ** Import Next
import assets from "@/assets/assets";
import Image from "next/image";

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
          <h5 className="text-5xl text-center font-light">Geomuda Indonesia</h5>
          <div className="py-[1px] bg-white w-[40rem]"></div>
        </div>

        <div className="flex justify-start flex-col items-center gap-10">
          <h1 className="text-[48px] max-w-3xl font-bold text-center uppercase">
            Lorem ipsum dolor sit amet consectetur.
          </h1>

          <button className="border border-white px-36 rounded-lg py-3">
            Join Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
