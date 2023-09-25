// ** Import Components
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";

const ChildrenLP = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default ChildrenLP;
