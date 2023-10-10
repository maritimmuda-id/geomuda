// ** Import Components
import Banner from "@/components/landing-page/Banner/Banner";
import Pengurus from "@/components/landing-page/Pengurus/Pengurus";

// ** Import Other
import assets from "@/assets/assets";

const PengurusPage = () => {
  return (
    <div>
      <Banner
        image={assets.banner4}
        title="PENGURUS PUSAT"
        subtitle="Asosiasi Geomuda Indonesia"
      />

      <Pengurus />
    </div>
  );
};

export default PengurusPage;
