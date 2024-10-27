import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserInfoCardInteraction from "./UserInfoCardInteraction";

const UserMediaCard = ({ userId }: { userId?: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-600 text-xs">
          See all
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">meow meow</span>
          <span className="text-sm">@meow</span>
        </div>
        <p>
          i am a cat who is a user of this website and i am a cat who is a user
          of this website
        </p>

        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in <b>rewa, india</b>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to <b>Jyoti School</b>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Works at <b>google</b>
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href={"/"} className="text-blue-500 font-medium">
              meow.com
            </Link>
          </div>

          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined today</span>
          </div>
        </div>

        <UserInfoCardInteraction
          userId={"meow"}
          isUserBlocked={false}
          isFollowing={true}
          isFollowingSent={false}
        />
      </div>
    </div>
  );
};

export default UserMediaCard;
