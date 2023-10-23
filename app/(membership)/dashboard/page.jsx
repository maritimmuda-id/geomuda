// ** Import Components
import HeadDashboard from "@/components/membership/HeadDashbaord/HeadDashboard";

const DashboardPage = () => {
  return (
    <div className="px-10 py-16 basis-5/6 h-screen">
      <HeadDashboard />

      <div className="grid grid-cols-3 gap-5">
        <div className="shadow-xl max-w-lg rounded-xl bg-[#F1F1F1] p-4 space-y-2">
          <h2>Jumlah User</h2>
          <p>-</p>
        </div>
        <div className="shadow-xl max-w-lg rounded-xl bg-[#F1F1F1] p-4 space-y-2">
          <h2>Lowongan Pekerjaan</h2>
          <p>-</p>
        </div>
        <div className="shadow-xl max-w-lg rounded-xl bg-[#F1F1F1] p-4 space-y-2">
          <h2>Jumlah User</h2>
          <p>-</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
