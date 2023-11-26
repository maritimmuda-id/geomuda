import assets from "@/assets/assets";
import { sejarah } from "@/constanst/sejarah";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Sejarah = () => {
  return (
    <div className="px-12 md:px-16 py-32">
      <div className="space-y-10">
        <div>
          <FaQuoteLeft className="text-4xl text-[#7B2418]" />
        </div>
        <div>
          <h2 className="text-3xl font-semibold my-16 text-center">
            SEJARAH PENDIRIAN
          </h2>
          <div className="space-y-32">
            {sejarah.map((content, index) => (
              <div
                className={`flex flex-col-reverse justify-center gap-y-10 lg:gap-x-20 ${
                  index % 2 == 1 && "lg:flex-row-reverse"
                } ${index % 2 == 0 && "lg:flex-row"}`}
                key={index}
              >
                <p className="basis-5/12 leading-7 text-center lg:text-left flex items-center">
                  {content.description}
                </p>
                <Image
                  src={content.image}
                  priority
                  className="basis-5/12 mx-auto w-8/12 lg:mx-0"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <FaQuoteRight className="text-4xl text-[#7B2418]" />
        </div>
      </div>
    </div>
  );
};

export default Sejarah;
