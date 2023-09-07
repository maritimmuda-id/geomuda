import assets from "@/assets/assets"
import Image from "next/image"

const Footer = () => {
  return (
    <div className="bg-gray-900 py-20 px-10 text-white space-y-16">
    <div className="grid grid-cols-3 gap-10 text-center">
      <div>
        <Image src={assets.logoGmiTextWhite} className="w-10 mx-auto" alt="logo geomuda indonesia text white"/>
        <div className="py-[1px] bg-white my-4"></div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Program</li>
          <li>Membership</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-xl">ADDRESS</h4>
        <div className="py-[1px] bg-white my-4"></div>
        <p>Head Office:Indonesia Blue Economy Center Kampus C STIE Indonesia Jakarta, Jalan Pratekan No. 9AKel. Rawamangun, Kec. Pulo Gadung, Jakarta 13220</p>
        <div className="py-[1.25px] bg-white my-4"></div>
        <p>National Secretariat:Jalan Pulau Bintan No. 12, Desa Semoi Dua, Kec. Sepaku, Kab. Penajam Paser Utara, IKN Nusantara.</p>
      </div>
      
      <div>
        <h4 className="font-bold text-xl">CONTACT</h4>
        <div className="py-[1px] bg-white my-4"></div>
        <ul>
          <li>+62-21-489-1137</li>
          <li>+62 823-7099-6119</li>
          <li>+62-812-9694-7244 </li>
          <li>admin@maritimmuda.id</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Footer