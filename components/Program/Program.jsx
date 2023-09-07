// ** Import Constant
import { programs } from "@/constanst/program";

// ** Import Next
import Image from "next/image";
import Link from "next/link";

const Program = () => {
  return (
    <div className="bg-gray-900 py-20 px-10 text-white space-y-16">
      <h1 className="text-center text-4xl">Our Program</h1>

      <div className="grid grid-cols-4 gap-8">
        {programs.map((program) => (
          <div className="rounded-xl">
            <Image src={program.image} alt={program.alt} className="w-full" />
            <p className="text-center p-5">{program.title}</p>
          </div>
        ))}
      </div>

      <div>
        <Link href="/program">
          <button className="border border-white px-36 rounded-xl py-2 flex mx-auto">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Program;
