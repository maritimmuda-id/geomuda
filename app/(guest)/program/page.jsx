// ** Import Components
import BannerProgram from "@/components/landing-page/Banner/BannerProgram";

// ** Import Constans
import { contentActivity } from "@/constanst/content-activity";

// ** Import Next
import Image from "next/image";

const ActivityPage = () => {
  return (
    <main>
      <BannerProgram />

      <article className="p-20 space-y-20">
        <h1 className="text-center text-5xl font-medium">Program</h1>

        <div className="space-y-20">
          {contentActivity.map((content, index) => (
            <div
              className={`flex justify-between mx-32 gap-16 ${
                index % 2 === 1 && "flex-row-reverse"
              } pb-20 border-b-4 last:border-b-0 border-black`}
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
          ))}
        </div>
      </article>
    </main>
  );
};

export default ActivityPage;
