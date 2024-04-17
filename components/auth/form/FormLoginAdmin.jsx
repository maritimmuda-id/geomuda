'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Loading from '@/components/membership/LoadingSpinner/LoadingSpinner';

export default function FormLogin() {
  const [loading, setLoading] = useState(false);
  const supabase = createClientComponentClient();
  const router = useRouter();

  const schema = yup.object({
    email: yup.string().email('Masukan Email Yang Valid').required('Harap Masukan Email Anda'),
    password: yup.string().min(8, 'Minimal Password 8 Kata').required('Harap Masukan Password Anda'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (input) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: input.email,
      password: input.password,
    });

    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: error.message,
      }).then(() => setLoading(false));
      return;
    }

    // Jika login berhasil, cek apakah pengguna adalah admin
    const { data: adminData, error: adminError } = await supabase.from('kta').select('admin').single();

    if (adminError) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: adminError.message,
      }).then(() => setLoading(false));
      return;
    }

    if (adminData && adminData.admin) {
      // Jika admin === true, arahkan ke halaman admin
      router.push('/DashboardAdmin');
    } else {
      // Jika admin === false, beri pesan bahwa bukan admin
      Swal.fire({
        icon: 'error',
        title: 'Gagal',
        text: 'Anda bukan admin. Silakan login dengan akun admin.',
      }).then(() => setLoading(false));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center flex-col mx-auto">
      <label className="mb-1 flex items-center">
        Email
        {errors?.email && <span className="text-red-600 text-sm ml-2">{`* ${errors.email.message}`}</span>}
      </label>
      <input type="email" {...register('email')} placeholder="Enter your email" className={`border-2 ${errors.email ? 'border-red-600' : 'border-slate-300'} rounded-xl p-2 mb-4 text-sm pl-3 focus:outline-none`} />

      <label className="mb-1 flex items-center">
        Password
        {errors?.password && <span className="text-red-600 text-sm ml-2">{`* ${errors.password.message}`}</span>}
      </label>
      <input type="password" {...register('password')} placeholder="Enter your password" className={`border-2 ${errors.password ? 'border-red-600' : 'border-slate-300'} rounded-xl p-2 mb-4 text-sm pl-3 focus:outline-none`} />
      <button type="submit" className="bg-[#7B2418] text-white rounded-xl p-2 mb-4">
        {loading ? <Loading /> : 'Login'}
      </button>
    </form>
  );
}
