import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const DashboardAdmin = async () => {
  const supabase = createServerComponentClient({ cookies });

  // untuk cek apakah user benar memasukkan akun
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // untuk cek dibagian admin apakah user yang login adalah admin
  const { data: adminData } = await supabase.from('kta').select('admin').single();

  // cek logic nya, jika bukan user atau bukan admin maka kembali ke halaman login admin
  if (!user || adminData.admin == null || adminData.admin == false) {
    redirect('/dashboard');
  }
  console.log(user);
  console.log(adminData.admin);
  return (
    <>
      <h1>Welcome to dashboard</h1>
    </>
  );
};

export default DashboardAdmin;
