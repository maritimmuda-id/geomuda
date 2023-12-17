// ** Import Components
import Banner from "@/components/landing-page/Banner/Banner";
import Sambutan from "@/components/landing-page/Sambutan/Sambutan";

const SambutanPage = () => {
  return (
    <div>
      <Banner
        image={"/images/sambutan.png"}
        title="SAMBUTAN KETUA UMUM"
        subtitle="Asosiasi Geomuda Indonesia"
      />

      <Sambutan />
    </div>
  );
};

export default SambutanPage;
