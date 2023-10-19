// ** Import Components
import AsideAuth from "@/components/auth/aside-auth/AsideAuth";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100 overflow-hidden">
      <AsideAuth />
      {children}
    </div>
  );
};

export default AuthLayout;
