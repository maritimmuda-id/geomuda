// ** Import Components
import BannerActivity from "@/components/BannerActivity/BannerActivity";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { contentActivity } from "@/constanst/content-activity";
import Image from "next/image";

const ActivityPage = () => {
  return (
    <main>
      <div className="relative">
        <Navbar />
        <BannerActivity />
      </div>

      <article className="p-20 space-y-20">
        <h1 className="text-center text-5xl font-medium text-green-700">
          Activity
        </h1>

        <div className="space-y-20">
          {contentActivity.map((content, index) => (
            <>
              <div
                className={`flex justify-between px-32 ${
                  index % 2 === 1 && "flex-row-reverse"
                } `}
              >
                <Image src={content.image} alt={content.alt}/>

                <div className="space-y-6">
                  <h1 className="text-2xl font-bold">{content.title}</h1>
                  <p className="max-w-md text-justify">{content.desc}</p>
                  <h5 className="text-right">{content.date}</h5>
                </div>
              </div>
              <div className="py-[1px] rounded-xl w-[80%] mx-auto bg-green-700"></div>
            </>
          ))}
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default ActivityPage;
