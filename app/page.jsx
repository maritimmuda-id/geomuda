// ** Import Components
import About from "@/components/About/About";
import Activity from "@/components/Activity/Activity";
import Banner from "@/components/Banner/Banner";
import Powered from "@/components/Powered/Powered";
import Navbar from "@/components/navbar/Navbar";

const LandingPage = () => {
  return (
    <main>
      <div className="relative">
        <Navbar />
        <Banner />
      </div>

      <About />
      <Activity />
      <Powered />
</main>
  );
};

export default LandingPage;
