import Image from "next/image";
import Link from "next/link";

import { programs } from "@/constanst/program";

const Program = () => {
  return (
    <div className="bg-gray-900 py-20 px-10 text-white space-y-16">
      <h1 className="text-center text-3xl md:text-4xl">Program Kami</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-14">
        {programs.map((program, index) => (
          <div key={index} className="rounded-xl space-y-6 md:space-y-4">
            <Image
              src={program.image}
              priority
              alt={program.alt}
              className="w-2/3 md:w-full mx-auto"
            />
            <p className="text-center md:p-5">{program.title}</p>
          </div>
        ))}
      </div>

      <div>
        <Link href="/program">
          <button className="border border-white px-12 sm:px-20 md:px-36 rounded-xl py-2 flex mx-auto">
            Tampilkan Lainnya
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Program;
