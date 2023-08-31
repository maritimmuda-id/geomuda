import assets from "@/assets/assets";
import Image from "next/image";

const Powered = () => {
  return (
    <div className="py-20 pt-16 pb-20 space-y-20">
    <h1 className="text-center text-4xl">Powered By</h1>
    <Image className="flex mx-auto" src={assets.logoMaritim} alt="Logo maritim muda" />
  </div>
  )
}

export default Powered