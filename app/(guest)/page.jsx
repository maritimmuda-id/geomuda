// ** Import Components
import About from "@/components/landing-page/About/About";
import Banner from "@/components/landing-page/Banner/Banner";
import Powered from "@/components/landing-page/Powered/Powered";
import Program from "@/components/landing-page/Program/Program";

const LandingPage = () => {
  return (
    <main>
      <Banner
        image={"/images/beranda.png"}
        title="Asosiasi Geomuda Indonesia"
        buttonTitle="Bergabung Dengan Kami"
        to="/login"
      />

      <About />

      <Program />

      <div className="relative">
        <Powered />
      </div>
    </main>
  );
};

export default LandingPage;
