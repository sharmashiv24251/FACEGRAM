import Image from "next/image";
import Link from "next/link";
import React from "react";

const Birthdays = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
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
          <button className="bg-blue-500 rounded-md text-white px-2 py-1 text-xs">
            Celebrate
          </button>
        </div>
      </div>
      {/* UPCOMING */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image alt="" height={24} width={24} src={"/gift.png"} />
        <Link href={"/"} className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-gray-500">
            See other 16 have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
