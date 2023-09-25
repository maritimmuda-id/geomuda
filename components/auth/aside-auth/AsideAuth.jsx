// ** Import Assets
import assets from "@/assets/assets";

// ** Import Next
import Image from "next/image";

const AsideAuth = () => {
  return (
    <div className="basis-4/12">
      <Image
        src={assets.sideImage}
        alt="side image"
        className="h-screen w-full"
        priority={true}
      />
    </div>
  );
};

export default AsideAuth;
