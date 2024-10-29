import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FriendRequestList from "./FriendRequestList";

const FriendRequests = async () => {
  const { userId } = auth();

  if (!userId) return null;

  const requests = await prisma.followRequest.findMany({
    where: {
      receiverId: userId,
    },
    include: {
      sender: true,
    },
  });

  // if (!requests) return null;
  // if (requests.length === 0) return null;

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
      <FriendRequestList requests={requests} />
    </div>
  );
};

export default FriendRequests;
