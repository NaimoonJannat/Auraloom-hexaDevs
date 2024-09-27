import Image from "next/image";
import avatar from "./../../../public/avatar.png";
import cover from "./../../../public/cover.jpg";
import Link from "next/link";

const CreatorProfile = () => {
  const creator = {
    displayName: "Mahbub Sarwar",
    title: "musician",
    views: 10,
    followers: 15,
    contents: 25,
    likes: 15,
    comments: 10,
    badge: "Level 2",
    totalLength: "1hr 30Mins",
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-[100px] font-montserrat">
        <div className="bg-white shadow-lg rounded-2xl w-full lg:w-3/5">
          <Image
            alt="profile"
            src={cover}
            className="w-full mb-4 rounded-t-lg h-36 object-cover"
          />
          <div className="flex flex-col items-center justify-center p-4 -mt-16">
            <a href="#" className="relative block">
              <Image
                alt="profile"
                src={avatar}
                className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
              />
            </a>

            <div className="flex flex-col items-center mt-3">
              <h3 className="text-3xl font-bold text-blue-500">
                {creator.displayName}
              </h3>
              <h5 className="uppercase font-semibold text-sm mb-3">
                {creator.title}
              </h5>
              <div className="p-2 btn uppercase px-4 text-xs text-white bg-blue-500 rounded-full">
                <Link href={"/follow"}>Follow</Link>
              </div>
            </div>
            {/* <p className="mt-2 text-xl font-medium text-gray-800 ">
              User Id: {user?.uid}
            </p> */}

            <div className="w-full p-2 mt-4 rounded-lg">
              <h3 className="font-bold">Content Summary</h3>
              <hr className="my-2" />
              <div className="flex flex-wrap items-center space-y-6 justify-between text-sm text-gray-600 ">
                <p className="flex flex-col">
                  Total Contents
                  <span className="font-bold text-black">
                    {creator?.contents}
                  </span>
                </p>
                <p className="flex flex-col mt-3 lg:mt-0">
                  Total Views
                  <span className="font-bold text-black">{creator?.views}</span>
                </p>

                <div className="mt-3 lg:mt-0">
                  <div className="">
                    <p>Total Content Length:</p>
                    <span className="font-bold uppercase mt-1">
                      {creator?.totalLength}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-2 mt-4 rounded-lg">
              <h3 className="font-bold">Connection and Badge Summary</h3>
              <hr className="my-2" />
              <div className="flex flex-wrap items-center space-y-6 justify-between text-sm text-gray-600 ">
                <p className="flex flex-col">
                  Total Followers
                  <span className="font-bold text-black">
                    {creator?.followers}
                  </span>
                </p>
                <p className="flex flex-col mt-3 lg:mt-0">
                  Total Likes
                  <span className="font-bold text-black">{creator?.likes}</span>
                </p>

                <div className="mt-3 lg:mt-0">
                  <div className="">
                    <p>Total Comments</p>
                    <span className="font-bold uppercase mt-1">
                      {creator?.comments}
                    </span>
                  </div>
                </div>
                <div className="mt-3 lg:mt-0">
                  <div className="">
                    <p className="mb-2">Badge</p>
                    <span className="font-bold uppercase bg-orange-600 p-1 rounded-lg text-white">
                      {creator?.badge}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfile;
