// ** Import Components
import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Powered from "@/components/Powered/Powered";
import Program from "@/components/Program/Program";
import Navbar from "@/components/navbar/Navbar";

const LandingPage = () => {
  return (
    <main>
      <div className="relative">
        <Navbar />
        <Banner />
      </div>

      <About />
      <Program />

      <div className="relative">
        <Powered />
      </div>

      <Footer />
</main>
  );
};

export default LandingPage;
