// ** Import Next
import Image from "next/image";

// ** Import Constant
import { produk } from "@/constanst/katalog-produk";

const KatalogProduk = () => {
  return (
    <div className="px-16 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 md:gap-y-18 md:gap-x-16 px-2 lg:px-24">
        {produk.map((data, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg border-2 overflow-hidden w-full mx-auto`}
          >
            <Image
              src={data.image}
              priority
              alt="Image profile"
              className="mx-auto aspect-square w-full"
            />
            <div className="text-center py-6 space-y-2">
              <h6 className="text-lg md:text-xl font-semibold mx-3">{data.name}</h6>
              <p className="py-1 mx-2">{data.desc}</p>
              <button className="border border-white px-16 sm:px-20 md:px-28 rounded-2xl py-2 md:py-3">
                Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KatalogProduk;
