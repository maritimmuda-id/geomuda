// ** Import Assets
import assets from '@/assets/assets';

// ** Import Components
import FormLoginAdmin from '@/components/auth/form/FormLoginAdmin';

// ** Import Next
import Image from 'next/image';

const AdminPage = () => {
  return (
    <div className="lg:basis-8/12 w-full px-10 lg:p-0">
      <div className="p-6 md:p-10 max-w-xl shadow-2xl rounded-xl bg-slate-50 mx-auto">
        <Image src={assets.gmiGlobalNetworks} className="w-40 mx-auto" alt="logo geomuda indonesia" />
        <h2 className="text-xl text-center my-5 font-semibold py-4">Login</h2>

        <FormLoginAdmin />
      </div>
    </div>
  );
};
export default AdminPage;
