// ** Import Assets
import assets from "@/assets/assets";

// ** Import Components
import FormLogin from "@/components/auth/form/FormLogin";

// ** Import Next
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="lg:basis-8/12">
      <div className="p-6 md:p-10 max-w-lg shadow-2xl rounded-xl bg-slate-50 mx-auto">
        <Image
          src={assets.logoGmiDefault}
          className="w-32 mx-auto"
          alt="logo geomuda indonesia"
        />
        <h2 className="text-2xl text-center my-5 font-semibold">Login</h2>

        <FormLogin />

        <div className="text-center my-5">
          <p className="text-sm">
            Don't have account?{" "}
            <span className="font-semibold">
              <Link href="/register">Register</Link>
            </span>
          </p>
          <p className="text-sm">
            Forgot password? <span className="font-semibold">Reset</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
