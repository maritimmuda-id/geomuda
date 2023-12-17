// ** Import Components
import Banner from "@/components/landing-page/Banner/Banner";
import Pengawas from "@/components/landing-page/Pengawas/Pengawas";

const PenasihatPage = () => {
  return (
    <div>
      <Banner
        image={"/images/dewan.png"}
        title="Dewan Pengawas"
        subtitle="Asosiasi Geomuda Indonesia"
      />

      <Pengawas />
    </div>
  );
};

export default PenasihatPage;
