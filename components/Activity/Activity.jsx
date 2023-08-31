import assets from "@/assets/assets";
import { activities } from "@/constanst/activity";
import Image from "next/image";

const Activity = () => {
  return (
    <div className="bg-[#0D6630] py-20 px-10 text-white space-y-16">
      <h1 className="text-center text-4xl">Our Activity</h1>
      <div className="grid grid-cols-4 gap-8">
        {activities.map((activiti) => (
          <div className="rounded-xl">
            <Image src={activiti.image} className="w-full" />
          </div>
        ))}
      </div>

      <button className="border border-white px-36 rounded-xl py-2 flex mx-auto">
        Show More
      </button>
    </div>
  )
}

export default Activity