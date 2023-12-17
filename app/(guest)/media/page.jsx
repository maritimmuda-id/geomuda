import assets from "@/assets/assets";
import Banner from "@/components/landing-page/Banner/Banner";
import { news } from "@/constanst/news";

import Image from "next/image";

const Media = () => {
  return (
    <div>
      <Banner
        image={"/images/media.png"}
        title="MEDIA GEOMUDA"
        subtitle="Asosiasi Geomuda Indonesia"
      />
      <div className="-mt-24 flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-evenly lg:justify-start text-sm lg:text-base space-x-4 lg:space-x-12 text-white ml-0">
          <p>Beranda</p>
          <p>Berita</p>
          <p>Pengumuman</p>
          <p>Opini</p>
          <p>Kepustakaan</p>
        </div>
        <div className="mt-8 mb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12 mx-20">
          {news.map((data, index) => (
            <div
              className="w-full mx-auto  bg-slate-50 p-6 rounded-md border-2"
              key={index}
            >
              <p className="uppercase text-sm text-gray-600">{data.type}</p>
              <h2 className="capitalize text-xl font-semibold my-2">
                {data.title}
              </h2>
              <p className="text-sm leading-5 line-clamp-[8] my-5">
                {data.description}
              </p>
              <div className="flex justify-between">
                <Image src={assets.logoGmiDefault} className="w-10"></Image>
                <p className="uppercase">1 Min Read</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
