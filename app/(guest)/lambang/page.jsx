// ** Import Assets
import assets from '@/assets/assets'

// ** Import Components
import Banner from '@/components/landing-page/Banner/Banner'
import Lambang from '@/components/landing-page/Lambang/Lambang'

const LambangPage = () => {
  return (
    <div>
      <Banner 
        image={assets.banner6}
        title="Lambang Organisasi"
        subtitle="Asosiasi Geomuda Indonesia"
      />

      <Lambang />
    </div>
  )
}

export default LambangPage