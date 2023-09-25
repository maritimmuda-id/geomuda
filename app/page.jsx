// ** Import Components
import About from "@/components/landing-page/About/About";
import Banner from "@/components/landing-page/Banner/Banner";
import Powered from "@/components/landing-page/Powered/Powered";
import Program from "@/components/landing-page/Program/Program";
import ChildrenLP from "@/components/landing-page/children-lp/ChildrenLP";

const LandingPage = () => {
  return (
    <main>
      <ChildrenLP>
        <Banner />

        <About />

        <Program />

        <div className="relative">
          <Powered />
        </div>
      </ChildrenLP>
    </main>
  );
};

export default LandingPage;
