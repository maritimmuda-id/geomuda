// ** Import Next
import Image from "next/image";
import Link from "next/link";
// ** Import Constant
import { produk } from "@/constanst/katalog-produk";
// ahhh elah

const KatalogProduk = () => {
  return (
    <div className="px-16 py-32">
      <div className="md:gap-y-18 grid grid-cols-1 gap-x-8 gap-y-10 px-2 md:grid-cols-2 md:gap-x-16 lg:grid-cols-4 lg:px-24">
        {produk.map((data, index) => (
          <div
            key={index}
            className={`mx-auto w-full overflow-hidden rounded-xl border-2 shadow-lg`}
          >
            <Image
              src={data.image}
              priority
              alt="Image profile"
              className="mx-auto aspect-square w-full pt-5"
            />
            <div className="space-y-2 px-5 py-6 text-center">
              <h6 className="mx-3 text-lg font-semibold md:text-xl">
                {data.name}
              </h6>
              <p className="mx-2 pb-3">{data.desc}</p>
              <div className="mt-5">
                <Link href={`/katalog/detail/${data.id}`}>
                  <button
                    type="button"
                    className="w-full rounded-xl bg-gray-900 px-16 py-2 font-semibold text-white transition duration-0 hover:bg-gray-700 hover:duration-300"
                  >
                    DETAIL
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
