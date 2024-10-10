"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import SectionTitle from "../Heading/SectionTitle";
import DashboardHeading from "../Heading/DashboardHeading";
import { PlayIcon } from "@heroicons/react/solid";
import { Typewriter } from "react-simple-typewriter";

const UserDashboardFee = () => {
  const [listenLater, setlistenLater] = useState([]);

  // Fetch playlist data (you can replace this with actual API call)
  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          name: "Workout at the gym",
          duration: "2h 15m",
          image: "https://i.ibb.co.com/HFvZp6g/36b51ec659040cb5ef1d6e8780cb1ff4.jpg",
        },
        {
          id: 2,
          name: "Tracks without lyrics",
          duration: "2h 15m",
          image: "https://i.ibb.co.com/TYW5Xd5/ea596c912c4c0452b24219ab9d9b68ef.jpg",
        },
        {
          id: 3,
          name: "Funny stuff",
          duration: "6h 48m",
          image: "https://i.ibb.co.com/7rzZYBq/e5b23de9d812e7f39204c43e2ca4eff5.jpg",
        },
        {
          id: 4,
          name: "Careful driving vibes",
          duration: "5h 09m",
          image: "https://i.ibb.co.com/Sm1pKGz/9140a74714f6efbe6ba6a8de3b410ac7.jpg",
        },
      ];
      setlistenLater(data);
    };
    fetchData();
  }, []);

  return (
    <div className="feed-container mx-auto p-6  text-white">
      <style>
        {`
                .text-wrapper {
                    position: absolute;
                    top: 33%;
                    left: 23%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    font-size: 32px;
                    font-weight: bold; 
                    color: #f97316;
                }
                `}
      </style>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-gradient-to-r from-sky-900 to-slate-900 mb-7 rounded-lg overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://i.ibb.co.com/hLrMBX3/e597373a4b68e34802a66c40cd3f50bb.jpg"
          alt="Artist"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />

        {/* Hero Content */}

        <div className="absolute inset-0 z-10 flex flex-col justify-center p-8">
          <div className="text-wrapper h-100vh">
            <Typewriter
              words={['Whats hot this weekend?', 'Catch the latest hits ','and trending albums.']}
              typeSpeed={80}
              loop={Infinity}
            />
          </div>
          <li className="flex btn items-center space-x-2 mb-2 hover:bg-orange-500 hover:text-white p-2 font-bold border-none mt-6 w-2/5 px-6 py-3 bg-white text-sky-700 rounded-full text-lg transition">
            <span>Listen Now</span>
            <PlayIcon className="h-6 w-6 hover:text-white text-sky-700" />
          </li>
        </div>
      </div>


      {/* Horizontal Nav */}
      <div className="horizontal-nav mb-6">
        <ul className="flex space-x-8 text-lg font-semibold">
          <li className="hover:text-orange-500 cursor-pointer">Playlist</li>
          <li className="hover:text-orange-500 cursor-pointer">Artists</li>
          <li className="hover:text-orange-500 cursor-pointer">Albums</li>
          <li className="hover:text-orange-500 cursor-pointer">Streams</li>
          <li className="hover:text-orange-500 cursor-pointer">Listen Later</li>
        </ul>
      </div>

      {/* listenLater Section */}
      <div>
        <h1>
          <DashboardHeading className="bg-black" title={"Listen Later"}></DashboardHeading>
        </h1>
      </div>
      <div className="listenLater-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {listenLater.map((later) => (
          <div key={later.id} className="later-card bg-gray-800 p-4 rounded-lg">
            <div className="relative w-full h-40">
              <Image
                src={later.image}
                alt={later.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-xl font-semibold">{later.name}</h3>
              <p className="text-gray-400">{later.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboardFee;
