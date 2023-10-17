// ** Import Components
import ContentProfile from "@/components/membership/ContentProfile/ContentProfile";

const ProfilePage = () => {
  return (
    <div className="px-10 py-16 w-full h-full">
      <div className="mb-10">
        <h1 className="text-3xl">Profile</h1>
      </div>

      <ContentProfile />
    </div>
  );
};

export default ProfilePage;
