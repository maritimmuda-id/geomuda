"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import assets from "@/assets/assets";
import { produk } from "@/constanst/katalog-produk";
import { FaWhatsapp } from "react-icons/fa";

const DetailProduk = () => {
  const router = useRouter();
  const { id } = router.query || {};

  // if (!id) {
  //   return <div>Cannot find the ID</div>;
  // }

  // const selectedProduk = produk.find((item) => item.id === id);

  // if (!selectedProduk) {
  //   return <div>Produk tidak ditemukan</div>;
  // }

  return (
    <>
      <div className="px-16 py-32">
        <div className="grid grid-cols-3 gap-4y">
          <div>
            <Image src={assets.katalog1} priority alt="Image profile" className="mx-auto w-full px-5" />
          </div>
          <div className="col-span-2 px-16">
            <p className="text-sm text-red-700 mb-2">New Collection</p>
            <h1 className="text-2xl font-bold mb-5">Tumblr Maritim Muda</h1>
            <p className="font-normal">
              Tumblr kaca Maritim Muda adalah teman minum Anda yang ramah lingkungan. Dengan kapasitas 300ml dan desain
              yang ergonomis, tumblr ini nyaman untuk dibawa ke mana saja. Cocok untuk digunakan di kantor, sekolah,
              atau saat piknik di alam terbuka. Dibuat dari kaca berkualitas tinggi yang aman digunakan untuk minuman
              panas maupun dingin dan mudah dibersihkan, menjadikannya pilihan yang aman dan praktis untuk digunakan
              setiap hari.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-10">
              Rp. 20.000,00 <span className="text-sm font-light">/pc</span>
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
            {/* <h1>{selectedProduk.name}</h1>
          <p>Harga: {selectedProduk.price}</p>
          <p>Deskripsi: {selectedProduk.desc}</p> */}
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
