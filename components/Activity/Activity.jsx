// ** Import Constant
import { activities } from "@/constanst/activity";

// ** Import Next
import Image from "next/image";
import Link from "next/link";

const Activity = () => {
  return (
    <div className="bg-[#0D6630] py-20 px-10 text-white space-y-16">
      <h1 className="text-center text-4xl">Our Activity</h1>

      <div className="grid grid-cols-4 gap-8">
        {activities.map((activiti) => (
          <div className="rounded-xl">
            <Image src={activiti.image} alt={activiti.alt} className="w-full" />
          </div>
        ))}
      </div>

      <div>
        <Link href="/activity">
          <button className="border border-white px-36 rounded-xl py-2 flex mx-auto">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Activity;
