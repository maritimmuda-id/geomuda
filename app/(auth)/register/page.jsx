// ** Import Components
import FormRegister from "@/components/auth/form/FormRegister";

// ** Import Assets
import assets from "@/assets/assets";

// ** Import Next
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="basis-8/12 overflow-hidden">
      <div className="p-6 md:p-10 max-w-lg shadow-2xl rounded-xl bg-slate-50 mx-auto">
        <Image
          src={assets.logoGmiDefault}
          className="w-32 mx-auto"
          alt="logo geomuda indonesia"
        />
        <h2 className="text-2xl text-center my-5 font-semibold">Register</h2>

        <FormRegister />

        <div className="text-center my-4">
          <p className="text-sm">
            Back to{" "}
            <span className="font-semibold">
              <Link href="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
