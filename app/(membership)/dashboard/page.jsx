// ** Import Components
import NavMember from '@/components/membership/NavMember/NavMember';
import NavLeft from '@/components/membership/NavLeft/NavLeft';

const DashboardPage = () => {
  return (
    <div>
      <NavMember />
      <div className='flex'>
        <NavLeft />
        <div className='px-10 py-16 basis-5/6 h-screen'>
          <div className='space-y-2 mb-14'>
            <h1 className='text-4xl mb-6'>Dashboard</h1>
            <p>Halo User,</p>
            <p>Selamat datang di dashboard</p>
          </div>
          <div className='grid grid-cols-3 gap-5'>
            <div className='shadow-xl max-w-lg rounded-xl bg-[#F1F1F1] p-4 space-y-2'>
              <h2>Jumlah User</h2>
              <p>-</p>
            </div>
            <div className='shadow-xl max-w-lg rounded-xl bg-[#F1F1F1] p-4 space-y-2'>
              <h2>Lowongan Pekerjaan</h2>
              <p>-</p>
            </div>
            <div className='shadow-xl max-w-lg rounded-xl bg-[#F1F1F1] p-4 space-y-2'>
              <h2>Jumlah User</h2>
              <p>-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage