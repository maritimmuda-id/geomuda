// ** Import Assets
import assets from "@/assets/assets";

// ** Import Next
import Image from "next/image";

const Powered = () => {
  return (
    <div>
      <Image
        src={assets.poweredBackground}
        alt="great canyon black and white colour"
        className="w-full h-[500px] object-cover object-center"
      />

      <div className="absolute py-20 md:top-0 right-0 bottom-0 left-0 flex justify-center items-center flex-col space-y-40 md:space-y-20">
        <h1 className="text-center text-3xl md:text-4xl">Mitra</h1>

        <Image
          className="flex mx-auto w-5/12 sm:w-auto"
          src={assets.logoMaritim}
          alt="Logo maritim muda"
        />
      </div>
    </div>
  );
};

export default Powered;
