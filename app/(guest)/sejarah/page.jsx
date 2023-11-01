import assets from '@/assets/assets'
import Banner from '@/components/landing-page/Banner/Banner'
import Sejarah from '@/components/landing-page/Sejarah/Sejarah'

const SejarahPage = () => {
  return (
    <div>
      <Banner 
        image={assets.banner3}
        title="Sejarah Pendirian"
        subtitle="Asosiasi Geomuda Indonesia"
      />

      <Sejarah />
    </div>
  )
}

export default SejarahPage