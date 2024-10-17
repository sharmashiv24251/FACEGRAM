import Image from "next/image";

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      <Image
        alt=""
        src={
          "https://images.pexels.com/photos/20414000/pexels-photo-20414000/free-photo-of-gentoo-penguin-on-snow.jpeg"
        }
        width={48}
        height={48}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex flex-col">
          <div className="flex gap-4 flex-1">
            <textarea
              placeholder="What's on your mind"
              className=" bg-slate-100 rounded-lg p-2 w-full outline-none flex-1"
              name=""
              id=""
            />
            <Image
              alt=""
              src={"/emoji.png"}
              width={20}
              height={20}
              className="w-5 h-5 rounded-full object-cover cursor-pointer self-end"
            />
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addImage.png" alt="" width={20} height={20} />
            Image
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
