"use client";

import { useRouter } from "next/navigation";
import { produk } from "@/constanst/katalog-produk";

const DetailProduk = () => {
  const router = useRouter();
  const { id } = router.query || {};

  if (!id) {
    return <div>ID RAK ONOOOOO</div>;
  }

  const selectedProduk = produk.find((item) => item.id === id);

  if (!selectedProduk) {
    return <div>Produk tidak ditemukan</div>;
  }

  return (
    <div className="font-xl px-16 py-24">
      <h1>{selectedProduk.nama}</h1>
      <p>Harga: {selectedProduk.harga}</p>
      <p>Deskripsi: {selectedProduk.deskripsi}</p>
    </div>
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
