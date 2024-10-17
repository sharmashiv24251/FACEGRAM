import Image from "next/image";
import React from "react";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="flex flex-col gap-4 bg-white shadow-md rounded-lg px-4 pb-4">
      {/* USER */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-4">
          <Image
            width={48}
            height={48}
            alt=""
            src="https://images.pexels.com/photos/28332951/pexels-photo-28332951/free-photo-of-a-woman-in-an-orange-dress-stands-in-a-doorway.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Meow Singh</span>
        </div>
        <Image
          width={16}
          height={16}
          alt=""
          src="/more.png"
          className="cursor-pointer mr-2"
        />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            fill
            alt=""
            src="https://images.pexels.com/photos/28798315/pexels-photo-28798315/free-photo-of-elderly-man-creating-traditional-calligraphy-art.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          dolores quo dolor id. Autem, officia dolorum eos nesciunt voluptates
          veritatis? Maiores nisi impedit expedita, quos sed blanditiis
          doloribus. Veniam, expedita.
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm mt-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <button>
              <Image
                src={"/like.png"}
                width={16}
                height={16}
                alt=""
                className="cursor-pointer"
              />
            </button>

            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123
              <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300 hidden md:inline">|</span>
            <span className="text-gray-500">
              <span className="hidden md:inline"> Share</span>
            </span>
          </div>
        </div>
      </div>
      <div className="h-1 w-full bg-slate-200 rounded-xl" />
      <Comments />
    </div>
  );
};

export default Post;
