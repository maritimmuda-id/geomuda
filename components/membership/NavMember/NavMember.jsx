// ** Import Icons
import { GiHamburgerMenu } from "react-icons/gi";

const NavMember = () => {
  return (
    <div className='bg-[#7B2418] p-5 flex justify-between items-center px-16'>
      <GiHamburgerMenu className='text-white text-2xl' />
      <button className='text-white'>User</button>
    </div>
  )
}

export default NavMember