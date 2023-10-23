// ** Import Components
import PrivateRoute from "@/components/PrivateRoute";
import Footer from "@/components/landing-page/Footer/Footer";
import Navbar from "@/components/landing-page/navbar/Navbar";

const GuestLayout = ({ children }) => {
  return (
    <PrivateRoute>
      <Navbar />

      {children}

      <Footer />
    </PrivateRoute>
  );
};

export default GuestLayout;
