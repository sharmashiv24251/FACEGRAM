import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href={"/"} className="text-blue-600">
          See all
        </Link>
      </div>
      {/* User */}
      <div className="flex items-center justify-between">
        <div className="font-semibold flex items-center gap-4">
          <Image
            alt=""
            height={40}
            width={40}
            src={
              "https://images.pexels.com/photos/12918397/pexels-photo-12918397.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>Shivansh sharma</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            alt=""
            height={20}
            width={20}
            src={"/accept.png"}
            className="cursor-pointer"
          />
          <Image
            alt=""
            height={20}
            width={20}
            src={"/reject.png"}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="font-semibold flex items-center gap-4">
          <Image
            alt=""
            height={40}
            width={40}
            src={
              "https://images.pexels.com/photos/12918397/pexels-photo-12918397.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>Shivansh sharma</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            alt=""
            height={20}
            width={20}
            src={"/accept.png"}
            className="cursor-pointer"
          />
          <Image
            alt=""
            height={20}
            width={20}
            src={"/reject.png"}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="font-semibold flex items-center gap-4">
          <Image
            alt=""
            height={40}
            width={40}
            src={
              "https://images.pexels.com/photos/12918397/pexels-photo-12918397.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>Shivansh sharma</span>
        </div>
        <div className="flex gap-3 justify-end">
          <Image
            alt=""
            height={20}
            width={20}
            src={"/accept.png"}
            className="cursor-pointer"
          />
          <Image
            alt=""
            height={20}
            width={20}
            src={"/reject.png"}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
