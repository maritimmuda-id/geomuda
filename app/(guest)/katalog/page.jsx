// ** Import Components
import Banner from "@/components/landing-page/Banner/Banner";
import KatalogProduk from "@/components/landing-page/KatalogProduk/KatalogProduk";

const Katalog= () => {
  return (
    <div>
      <Banner
        image={"/images/dewan.jpg"}
        title="SOUVENIR PRODUK"
        subtitle="Asosiasi Geomuda Indonesia"
      />

      <KatalogProduk />
    </div>
  );
};

export default Katalog;
