// ** Import Components
import Banner from "@/components/landing-page/Banner/Banner";

// ** Import Other
import { contentActivity } from "@/constanst/content-activity";
import assets from "@/assets/assets";
import Image from "next/image";

const ActivityPage = () => {
  return (
    <main>
      <Banner
        image={assets.banner2}
        title="PROGRAM"
        buttonTitle="Home"
        to="/"
      />

      <article className="p-8 md:p-20 space-y-20">
        <h1 className="text-center text-3xl md:text-5xl font-medium py-8">
          Program
        </h1>

        <div className="space-y-20">
          {contentActivity.map((content, index) => (
            <div
              className={`flex justify-center lg:justify-between items-center lg:items-start flex-row flex-wrap lg:flex-nowrap mx-1 lg:mx-24 gap-16 ${
                index % 2 === 1 && "flex-row-reverse"
              } pb-10 lg:pb-20 border-b-0 lg:border-b-4 lg:last:border-b-0 border-black`}
            >
              <Image
                src={content.image}
                alt={content.title}
                className="md:w-7/12 lg:w-auto"
              />

              <div className="space-y-6">
                <h1 className="text-center lg:text-left text-2xl max-w-md md:max-w-lg font-bold mx-auto lg:mx-0">
                  {content.title}
                </h1>

                {typeof content.desc === "string" ? (
                  <p className="max-w-sm md:max-w-lg lg:max-w-sm text-base md:text-lg text-center lg:text-justify mx-auto lg:mx-0">
                    {content.desc}
                  </p>
                ) : (
                  <ul className="list-disc space-y-2 pl-5 mx-6 lg:mx-0">
                    {content.desc.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </article>
    </main>
  );
};

export default ActivityPage;
