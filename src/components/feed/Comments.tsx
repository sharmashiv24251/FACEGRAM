import React from "react";
import Image from "next/image";

const Comments = () => {
  return (
    <div>
      {/* CREATE */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/28848939/pexels-photo-28848939/free-photo-of-majestic-sea-turtle-swimming-underwater.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-1 justify-between items-center w-full bg-slate-100 rounded-xl text-sk px-6 py-2">
          <input
            type="text"
            className="bg-transparent flex-1 outline-none mr-2"
            placeholder="write whats on your mind !"
          />
          <Image
            src={"/emoji.png"}
            alt=""
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS */}

      <div className="flex gap-4 justify-between mt-6">
        {/* AVATAR */}
        <Image
          src={"/noAvatar.png"}
          alt=""
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        {/* DESC */}
        <div className="flex flex-col gap-2 flex-1">
          <span className="font-medium">MEOW</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            deserunt laboriosam nihil iure suscipit quam blanditiis, placeat
            provident! Distinctio sunt in id ea ad voluptates necessitatibus,
            mollitia eveniet temporibus eum?
          </p>
          <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
            <div className="flex items-center gap-4">
              <Image
                src="/like.png"
                alt=""
                width={12}
                height={12}
                className="cursor-pointer w-4 h-4"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">0 Likes</span>
            </div>
            <div className="">Reply</div>
          </div>
        </div>
        {/* ICON */}
        <Image
          src="/more.png"
          alt=""
          width={16}
          height={16}
          className="cursor-pointer w-4 h-4"
        ></Image>
      </div>
    </div>
  );
};

export default Comments;
