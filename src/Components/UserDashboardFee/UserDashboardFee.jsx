"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
// import SectionTitle from "../Heading/SectionTitle";
import DashboardHeading from "../Heading/DashboardHeading";
import { PlayIcon } from "@heroicons/react/solid";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ListenLater from "./ListenLater";

const UserDashboardFee = () => {
  const [playlists, setPlaylists] = useState([]);

  // Fetch playlist data (you can replace this with actual API call)
  useEffect(() => {
    const fetchPlaylists = async () => {
      const data = [
        {
          id: 1,
          name: "Chill Vibes",
          creator: "Naimoon Jannat Prapti",
          image: "https://i.ibb.co.com/dsZRYK5/7fd5ba33a4a9c6c6f530a825df3f7580.jpg",
        },
        {
          id: 2,
          name: "Focus Beats",
          creator: "Naimoon Jannat Prapti",
          image: "https://i.ibb.co.com/R0Gy2h0/d9d615645ba316e9e8086da6a0c7a111.jpg",
        },
        {
          id: 3,
          name: "Party Hits",
          creator: "Naimoon Jannat Prapti",
          image: "https://i.ibb.co.com/99g5b4g/38324762f7c33de0b27659a2628fba03.jpg",
        },
        {
          id: 4,
          name: "Road Trip Tunes",
          creator: "Naimoon Jannat Prapti",
          image: "https://i.ibb.co.com/MVjTFwx/3851974ace3ea131a4841a9c4b04ce4c.jpg",
        },
      ];
      setPlaylists(data);
    };
    fetchPlaylists();
  }, []);



  return (
    <PrivateRoute>
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
                words={['Whats hot this weekend?', 'Catch the latest hits ', 'and trending albums.']}
                typeSpeed={80}
                loop={Infinity}
              />
            </div>
            <Link href={"/podcast"} className="flex btn items-center space-x-2 mb-2 hover:bg-orange-500 hover:text-white p-2 font-bold border-none mt-6 w-2/5 px-6 py-3  text-sky-700 rounded-full text-lg transition">
              <span>Listen Now</span>
              <PlayIcon className="h-6 w-6 hover:text-white text-sky-700" />
            </Link>
          </div>
        </div>

        {/* Horizontal Nav */}
        {/* <div className="horizontal-nav mt-6">
        <ul className="flex space-x-8 text-lg font-semibold">
          <li className="hover:text-orange-500 cursor-pointer">Playlist</li>
          <li className="hover:text-orange-500 cursor-pointer">Artists</li>
          <li className="hover:text-orange-500 cursor-pointer">Albums</li>
          <li className="hover:text-orange-500 cursor-pointer">Streams</li>
          <li className="hover:text-orange-500 cursor-pointer">Listen Later</li>
        </ul>
      </div> */}
        {/* listenLater Section */}
        <ListenLater></ListenLater>

        {/* show individual playlist */}
        {/* <div className="mt-10">
          <div>
            <h1>
              <DashboardHeading className="bg-black" title={"Your Playlists"}></DashboardHeading>
            </h1>
          </div>
          <div className="playlist-list flex flex-col space-y-4">
            {playlists.map((playlist) => (
              <div key={playlist.id} className="playlist-item flex items-center bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition">
                <div className="w-24 h-24 relative flex-shrink-0">
                  <Image
                    src={playlist.image}
                    alt={playlist.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{playlist.name}</h3>
                  <p className="text-gray-400">Created by {playlist.creator}</p>
                </div>
                <div className="ml-auto">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg flex items-center">
                    <PlayIcon className="h-5 w-5 mr-2" />
                    Play
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </PrivateRoute>
  );
};

export default UserDashboardFee;
