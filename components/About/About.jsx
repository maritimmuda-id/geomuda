import assets from "@/assets/assets";
import Image from "next/image";

const About = () => {
  return (
    <div className="p-20">
      <h5 className="text-center text-4xl">About Us</h5>
      <div className="flex px-40 justify-center items-center gap-20">
        <Image src={assets.tree} alt="tree" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>

      <div className="flex flex-row-reverse px-40 justify-center items-center gap-20">
        <Image src={assets.tree} alt="tree" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
      </div>
    </div>
  );
};

export default About;
