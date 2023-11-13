// ** Import Components
import Banner from "@/components/landing-page/Banner/Banner";
import Pengawas from "@/components/landing-page/Pengawas/Pengawas";

// ** Import Other
import assets from "@/assets/assets";

const PenasihatPage = () => {
  return (
    <div>
      <Banner
        image={assets.banner4}
        title="Dewan Pengawas"
        subtitle="Asosiasi Geomuda Indonesia"
      />

      <Pengawas />
    </div>
  )
}

export default PenasihatPage