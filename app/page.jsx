// ** Import Components
import Banner from "@/components/Banner/Banner";
import Navbar from "@/components/navbar/Navbar";

const LandingPage = () => {
  return (
    <main>
      <div className="relative">
        <Navbar />

        <Banner />
      </div>
    </main>
  );
};

export default LandingPage;
