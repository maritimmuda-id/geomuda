// ** Import Components
import Banner from "@/components/landing-page/Banner/Banner";
import Penasihat from "@/components/landing-page/Penasihat/Penasihat";

// ** Import Other
import assets from "@/assets/assets";

const PenasihatPage = () => {
  return (
    <div>
      <Banner
        image={assets.banner4}
        title="PENASIHAT PUSAT"
        subtitle="Asosiasi Geomuda Indonesia"
      />

      <Penasihat />
    </div>
  )
}

export default PenasihatPage