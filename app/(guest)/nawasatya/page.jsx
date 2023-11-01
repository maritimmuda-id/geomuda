// ** Import Assets
import assets from '@/assets/assets'

// ** Import Components
import Banner from '@/components/landing-page/Banner/Banner'
import Nawasatya from '@/components/landing-page/Nawasatya/Nawasatya'

const NawasatyaPage = () => {
  return (
    <div>
      <Banner 
        image={assets.banner3}
        title="Nawa Satya"
        subtitle="Asosiasi Geomuda Indonesia"
      />

      <Nawasatya />
    </div>
  )
}

export default NawasatyaPage