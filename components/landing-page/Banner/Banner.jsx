// ** Import Next
import Image from "next/image";
import Link from "next/link";

const Banner = (props) => {
  const { image, title, buttonTitle, to, subtitle } = props;

  const isHome = to === "/login";

  return (
    <>
      <Image
        src={image}
        alt="banner"
        className="w-full h-screen object-cover object-center"
      />

      <div
        className={`absolute mt-20 top-0 right-0 bottom-0 left-0 flex justify-center items-center text-white flex-col space-y-6 ${
          isHome ? "md:space-y-14" : "md:space-y-10"
        } z-10`}
      >
        <div className="space-y-4">
          <h5 className="text-4xl md:text-5xl text-center font-semibold uppercase">
            {title}
          </h5>
          <div
            className={`py-[1px] bg-white w-[20rem] md:w-[30rem] ${
              isHome ? "lg:w-[54rem]" : "lg:w-[48rem]"
            } mx-auto`}
          ></div>
        </div>

        {subtitle ? (
          <p className="text-xl md:text-3xl">{subtitle}</p>
        ) : (
          <div className="flex justify-start flex-col items-center gap-10">
            <Link href={to}>
              <button className="border border-white px-24 md:px-28 rounded-2xl py-2 md:py-3">
                {buttonTitle}
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Banner;
