"use client"
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
// import SectionTitle from "../Heading/SectionTitle";
import DashboardHeading from "../Heading/DashboardHeading";
import { PlayIcon } from "@heroicons/react/solid";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ListenLater from "./ListenLater";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import UserBadgeList from "./UserBadgeList";

const UserDashboardFee = () => {
  const [playlists, setPlaylists] = useState([]);
  const { user } = useContext(AuthContext);


  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch("https://auraloom-backend.vercel.app/playlists");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Filter playlists based on the logged-in user's email
        const filteredData = data.filter((playlist) => playlist.email === user.email);
        setPlaylists(filteredData);
      } catch (error) {
        console.error("Failed to fetch playlists:", error);
      }
    };

    if (user?.email) {
      fetchPlaylists();
    }
  }, [user?.email]);


  return (
    <PrivateRoute>
      <div className="feed-container mx-auto p-6 ml-0 md:ml-64 lg:ml-64 text-white">
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
                    color: #bae6fd;
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
                words={['Whats hot this weekend?', 'Catch the latest hits ', 'and trending albums.']}
                typeSpeed={80}
                loop={Infinity}
              />
            </div>
            <Link href={"/podcast"} className="flex btn items-center space-x-2 mb-2 hover:bg-sky-500 hover:text-white p-2 font-bold border-none mt-6 w-full lg:w-2/5 px-6 py-3  text-sky-700 rounded-full text-lg transition">
              <span>Listen Now</span>
              <PlayIcon className="h-6 w-6 hover:text-white text-sky-700" />
            </Link>
          </div>
        </div>

        {/* listenLater Section */}
        <ListenLater></ListenLater>

        {/* Badges */}
        <UserBadgeList />

        {/* Show Individual Playlist */}
        <div className="mt-10">
          <div>
            <h1>
              <DashboardHeading className="bg-black" title={"Your Playlists"}></DashboardHeading>
            </h1>
          </div>
          <div className="playlist-list flex flex-col space-y-4">
            {playlists.map((playlist) => {
              const playlistImage = playlist.image?.startsWith("http")
                ? playlist.image.split(" ")[0] 
                : "/path-to-placeholder-image.jpg";
              return (
                <div key={playlist._id} className="playlist-item flex flex-col md:flex-row lg:flex-row items-center bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
                  <div className="w-24 h-24 relative flex-shrink-0">
                    <Image
                      src={playlistImage}
                      alt={playlist.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{playlist.name}</h3>
                    <p className="text-gray-400">Created by {playlist.email}</p>
                  </div>
                  <div className="ml-auto">
                    <button className="bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-lg flex items-center">
                      <PlayIcon className="h-5 w-5 mr-2" />
                      Play
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default UserDashboardFee;
