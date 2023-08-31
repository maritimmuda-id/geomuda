// ** Import Components
import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/navbar/Navbar";

const LandingPage = () => {
  return (
    <main>
      <div className="relative">
        <Navbar />
        <Banner />  
      </div>
      <About />
    </main>
  );
};

export default LandingPage;
