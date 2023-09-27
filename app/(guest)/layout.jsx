// ** Import Components
import Footer from "@/components/landing-page/Footer/Footer";
import Navbar from "@/components/landing-page/navbar/Navbar";

const GuestLayout = ({ children }) => {
  return (
    <main>
      <Navbar />

      {children}

      <Footer />
    </main>
  );
};

export default GuestLayout;
