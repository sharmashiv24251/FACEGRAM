import Ad from "./Ad";
import Birthdays from "./rightMenu/Birthdays";
import FriendRequests from "./rightMenu/FriendRequests";
import UserInfoCard from "./rightMenu/UserInfoCard";
import UserMediaCard from "./rightMenu/UserMediaCard";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
