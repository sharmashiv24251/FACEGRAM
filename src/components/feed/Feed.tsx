import Post from "../Post";

const Feed = ({ username }: { username: string }) => {
  return (
    <div className="  rounded-lg flex flex-col gap-8">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
