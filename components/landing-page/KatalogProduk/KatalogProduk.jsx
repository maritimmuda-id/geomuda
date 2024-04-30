import Image from "next/image";
import Link from "next/link";

import produk from "@/constanst/katalog-produk";

const KatalogProduk = () => {
  const initialData = produk();

  const initialData = produk();

  return (
    <div className="px-16 py-28">
      <div className="md:gap-y-18 grid grid-cols-1 gap-x-8 gap-y-10 px-2 md:grid-cols-2 md:gap-x-16 lg:grid-cols-4 lg:px-24">
        {initialData.map((data, index) => (
          <div
            key={index}
            className={`mx-auto w-full overflow-hidden rounded-xl border-2 shadow-lg`}
          >
            <Image
              src={data.image}
              priority
              alt=""
              className="mx-auto aspect-square w-full pt-5"
            />
        {initialData.map((data, index) => (
          <div key={index} className={`mx-auto w-full overflow-hidden rounded-xl border-2 shadow-lg`}>
            <Image src={data.image} priority alt="" className="mx-auto aspect-square w-full pt-5" />
            <div className="space-y-2 px-5 py-6 text-center">
              <h6 className="mx-3 text-lg font-semibold md:text-xl">
                {data.name}
              </h6>
              <p className="mx-2 py-2">{data.price}</p>
              <h6 className="mx-3 text-lg font-semibold md:text-xl">{data.name}</h6>
              <p className="mx-2 py-2">{data.price}</p>
              <div className="mt-5">
                <Link href={`/katalog/detail/${data.id}`}>
                  <button
                    type="button"
                    className="w-full rounded-xl bg-gray-900 px-16 py-2 font-semibold text-white transition duration-0 hover:bg-gray-700 hover:duration-300"
                  >
                    LIHAT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KatalogProduk;
