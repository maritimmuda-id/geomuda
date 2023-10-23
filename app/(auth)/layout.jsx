// ** Import Components
import PrivateRoute from "@/components/PrivateRoute";
import AsideAuth from "@/components/auth/aside-auth/AsideAuth";

const AuthLayout = ({ children }) => {
  return (
    <PrivateRoute>
      <div className="flex justify-center items-center h-screen bg-slate-100 overflow-hidden">
        <AsideAuth />
        {children}
      </div>
    </PrivateRoute>
  );
};

export default AuthLayout;
