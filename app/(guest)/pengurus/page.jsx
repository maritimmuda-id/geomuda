// ** Import Components
import Banner from "@/components/landing-page/Banner/Banner";
import Pengurus from "@/components/landing-page/Pengurus/Pengurus";

const PengurusPage = () => {
  return (
    <div>
      <Banner
        image={"/images/pengurus.png"}
        title="PENGURUS PUSAT"
        subtitle="Asosiasi Geomuda Indonesia"
      />

      <Pengurus />
    </div>
  );
};

export default PengurusPage;
