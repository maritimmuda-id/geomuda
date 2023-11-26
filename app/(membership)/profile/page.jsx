// ** Import Components
import ContentProfile from "@/components/membership/ContentProfile/ContentProfile";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

async function getData() {
  const res = await fetch("https://api.first.org/data/v1/countries");

  return res.json();
}

const ProfilePage = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: pendidikan } = await supabase.from("pendidikan").select("*");

  const { data: experience } = await supabase.from("experience").select("*");

  const { data: kta } = await supabase.from("kta").select("*");

  const countryData = await getData();

  return (
    <div className="px-10 py-16 w-full h-full">
      <div className="mb-10">
        <h1 className="text-3xl">Profile</h1>
      </div>

      <ContentProfile
        countryData={countryData}
        user={user}
        kta={kta}
        pendidikan={pendidikan}
        experience={experience}
      />
    </div>
  );
};

export default ProfilePage;
