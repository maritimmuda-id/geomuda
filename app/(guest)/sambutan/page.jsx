import assets from '@/assets/assets'
import Banner from '@/components/landing-page/Banner/Banner'
import Sambutan from '@/components/landing-page/Sambutan/Sambutan'
import React from 'react'

const SambutanPage = () => {
  return (
    <div>
      <Banner 
        image={assets.banner3}
        title="SAMBUTAN KETUA UMUM"
        subtitle="Asosiasi Geomuda Indonesia"
      />

      <Sambutan />
    </div>
  )
}

export default SambutanPage