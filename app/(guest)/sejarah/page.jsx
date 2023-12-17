import Banner from "@/components/landing-page/Banner/Banner";
import Sejarah from "@/components/landing-page/Sejarah/Sejarah";

const SejarahPage = () => {
  return (
    <div>
      <Banner
        image={"/images/sejarah.png"}
        title="Sejarah Pendirian"
        subtitle="Asosiasi Geomuda Indonesia"
      />

      <Sejarah />
    </div>
  );
};

export default SejarahPage;
