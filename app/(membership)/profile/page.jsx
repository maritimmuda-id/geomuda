// ** Import Components
import NavMember from '@/components/membership/NavMember/NavMember';
import NavLeft from '@/components/membership/NavLeft/NavLeft';

const ProfilePage = () => {
  return (
    <div>
    <NavMember />
    <div className='flex'>
      <NavLeft />
      <div className='px-10 py-16 basis-5/6 h-screen'>
        <div className='mb-10'>
          <h1 className='text-4xl'>Profile</h1>
        </div>
        <div className=''>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProfilePage