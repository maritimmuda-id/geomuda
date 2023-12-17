// ** Import Components
import Banner from "@/components/landing-page/Banner/Banner";
import Nawasatya from "@/components/landing-page/Nawasatya/Nawasatya";

const NawasatyaPage = () => {
  return (
    <div>
      <Banner
        image={"/images/nawasatya.png"}
        title="Nawa Satya"
        subtitle="Asosiasi Geomuda Indonesia"
      />

      <Nawasatya />
    </div>
  );
};

export default NawasatyaPage;
