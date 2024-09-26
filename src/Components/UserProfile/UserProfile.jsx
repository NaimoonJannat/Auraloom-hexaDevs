import Image from "next/image";
import avatar from "./../../../public/avatar.png";
import cover from "./../../../public/cover.jpg";

const UserProfile = () => {
  const user = {
    displayName: "Mahbub Sarwar",
    email: "mahbubsarwar5@gmail.com",
  };
  return (
    <div>
      <div className="flex justify-center items-center mt-[100px] lg:mt-[200px]">
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

            <p className="p-2 uppercase px-4 text-xs text-white bg-blue-500 rounded-full">
              {/* {role} */}
            </p>
            {/* <p className="mt-2 text-xl font-medium text-gray-800 ">
              User Id: {user?.uid}
            </p> */}
            <div className="w-full p-2 mt-4 rounded-lg">
              <div className="flex flex-col items-center space-y-6 justify-between text-sm text-gray-600 ">
                <p className="flex flex-col items-center">
                  <span className="font-bold text-black text-2xl">
                    {user?.displayName}
                  </span>
                  Name
                </p>
                <p className="flex flex-col items-center mt-3 lg:mt-0">
                  <span className="font-bold text-black text-xl">{user?.email}</span>
                  Email
                </p>

                <div className="mt-3 lg:mt-0">
                  <div className="flex flex-col items-center">
                    <p>Subscription:</p>
                    <span className="font-bold text-white uppercase bg-violet-500 p-2 rounded-xl mt-1">
                      Premium
                    </span>
                  </div>

                  {/* <button className="bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1">
                    Update Profile
                  </button>
                  <button className="bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]">
                    Change Password
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
