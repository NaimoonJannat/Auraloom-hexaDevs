"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import SectionTitle from "../Heading/SectionTitle";

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
      <div className="search-bar mb-6">
        <input
          type="text"
          placeholder="Search by artists, songs or albums"
          className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
        />
      </div>

      {/* Playlist of the Day */}
      <div className="playlist-of-day mb-8 relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.ibb.co.com/r4PgsvG/pexels-photo-339119.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
        </div>

        {/* Playlist Content */}
        <div className="relative z-10 flex flex-wrap items-center bg-gray-900 bg-opacity-80 p-6 rounded-lg">
          {/* Playlist Image */}
          <div className="relative w-full sm:w-1/2 md:w-1/3 flex flex-col justify-between h-full">
            <Image
              src="https://i.ibb.co.com/DVLdRs9/download-8.jpg"
              alt="Playlist cover"
              width={400}
              height={400}
              className="rounded-lg h-full object-cover"
            />
          </div>

          {/* Video Section with Floating Title */}
          <div className="w-full sm:w-1/2 md:w-2/3 p-4 relative flex flex-col justify-between h-full">
            {/* Video */}
            <video
              controls
              className="w-full rounded-lg mt-12 h-full object-cover"
              poster="https://i.ibb.co.com/8BFFgf5/7b8d60b0a30ac6d8e4191952699f46f4.jpg"
            >
              <source
                src="/public/Amazon Rainforest in Brazil - Jungle Cruise on the Amazon River.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
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
          <SectionTitle  className="bg-black" title={"Listen Later"}></SectionTitle>
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
