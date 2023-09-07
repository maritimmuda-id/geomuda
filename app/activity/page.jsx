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
        <h1 className="text-center text-5xl font-medium">Program</h1>

        <div className="space-y-20">
          {contentActivity.map((content, index) => (
            <div
              className={`flex justify-between mx-32 gap-16 ${
                index % 2 === 1 && "flex-row-reverse"
              } pb-20 border-b-4  last:border-b-0 border-black`}
            >
              <Image src={content.image} alt={content.title} />

              <div className="space-y-6">
                <h1 className="text-2xl max-w-md font-bold">{content.title}</h1>

                {typeof content.desc === "string" ? (
                  <p className="max-w-sm text-lg text-justify">
                    {content.desc}
                  </p>
                ) : (
                  <ul className="list-disc space-y-2 pl-5">
                    {content.desc.map((desc) => (
                      <li>{desc}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            // <div className="py-[1.5px] rounded-xl w-[80%] mx-auto bg-black"></div>
          ))}
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default ActivityPage;
