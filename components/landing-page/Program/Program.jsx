// ** Import Constant
import { programs } from "@/constanst/program";

// ** Import Next
import Image from "next/image";
import Link from "next/link";

const Program = () => {
  return (
    <div className="bg-gray-900 py-20 px-10 text-white space-y-16">
      <h1 className="text-center text-3xl md:text-4xl">Our Program</h1>

      <div className="grid grid-cols-1  md:grid-cols-4 gap-8">
        {programs.map((program, index) => (
          <div key={index} className="rounded-xl space-y-5 md:space-y-0">
            <Image src={program.image} alt={program.alt} className="w-full" />
            <p className="md:text-center md:p-5">{program.title}</p>
          </div>
        ))}
      </div>

      <div>
        <Link href="/program">
          <button className="border border-white px-20 md:px-36 rounded-xl py-2 flex mx-auto">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Program;
