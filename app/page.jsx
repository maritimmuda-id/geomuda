// ** Import Components
import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/landing-page/Footer/Footer";
import Powered from "@/components/Powered/Powered";
import Program from "@/components/Program/Program";

const LandingPage = () => {
  return (
    <main>
      <Banner />

      <About />

      <Program />

      <div className="relative">
        <Powered />
      </div>
    </main>
  );
};

export default LandingPage;
