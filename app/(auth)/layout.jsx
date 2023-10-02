// ** Import Components
import AsideAuth from "@/components/auth/aside-auth/AsideAuth";

const AuthLayout = ({ children }) => {
  return (
    <div className="lg:flex lg:justify-center lg:items-center h-screen bg-slate-100">
      <AsideAuth />
      {children}
    </div>
  );
};

export default AuthLayout;
