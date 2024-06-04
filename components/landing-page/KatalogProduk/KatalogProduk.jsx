import Image from "next/image";
import Link from "next/link";

import produk from "@/constanst/katalog-produk";

const KatalogProduk = () => {
  const initialData = produk();

  return (
    <div className="px-16 py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 lg:gap-5 xl:gap-8">
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
            <div className="space-y-2 px-5 py-6 text-center">
              <h6 className="mx-3 text-lg font-semibold md:text-xl">
                {data.name}
              </h6>
              <p className="pb-4">{data.price}</p>
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
