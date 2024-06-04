// ** Import Next
import Image from "next/image";

// ** Import Constant
import { advisor } from "@/constanst/pengawas";

const Pengawas = () => {
  return (
    <div className="px-16 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8 md:gap-y-18 md:gap-x-16 px-2 lg:px-24">
        {advisor.map((data, index) => (
          <div key={index} className={`rounded-xl shadow-lg border-2 overflow-hidden w-full mx-auto`}>
            <Image src={data.image} priority alt="Image profile" className="mx-auto aspect-[3/4] w-full" />
            <div className="text-center py-6 space-y-2">
              <h6 className="text-lg md:text-xl font-semibold">{data.name}</h6>
              <p className="py-1">{data.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pengawas;