"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

import produk from "@/constanst/katalog-produk";
import { FaWhatsapp } from "react-icons/fa";

const DetailProduk = () => {
  const { id } = useParams();
  const initialData = produk();

  const selectedItem = initialData.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <>
      <div className="bg-gray-900 h-20"></div>
      <div className="px-16 py-24">
        <div className="grid grid-cols-3 gap-4y">
          <div>
            <Image src={selectedItem.image} priority alt="Image profile" className="mx-auto w-full px-5" />
          </div>
          <div className="col-span-2 px-16">
            <p className="text-sm text-red-700 mb-1 font-semibold">New Collection</p>
            <h1 className="text-2xl font-bold mb-5">{selectedItem.name}</h1>
            <p className="font-normal">{selectedItem.desc}</p>
            <h2 className="text-xl font-semibold mt-8 mb-10">
              {selectedItem.price} <span className="text-sm font-light">/pc</span>
            </h2>
            <Link href="#" target="_blank">
              <button
                type="button"
                className="rounded-lg bg-green-600 px-12 py-3 font-medium text-white transition duration-0 hover:bg-green-800 hover:duration-300"
              >
                <div className="me-1 flex">
                  <span className="text-xl me-2">
                    <FaWhatsapp />
                  </span>
                  PESAN SEKARANG
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps(context) {
  const { id } = context.query;

  // Cari produk berdasarkan ID dari router query
  const selectedProduk = produk.find((item) => item.id == id);

  // Jika produk tidak ditemukan, kembalikan props dengan pesan bahwa produk tidak ada
  if (!selectedProduk) {
    return {
      props: {
        notFound: true,
      },
    };
  }

  // Kembalikan props dengan detail produk
  return {
    props: {
      selectedProduk,
    },
  };
}

export default DetailProduk;
