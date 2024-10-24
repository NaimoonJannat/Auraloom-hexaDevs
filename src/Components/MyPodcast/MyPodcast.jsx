"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const MyPodcasts = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return; // Only fetch if user email is available

    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await axios(
          `http://localhost:5000/podcasts-email/${user?.email}`
        );
        setItem(data);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      } finally {
        setLoading(false); // Stop loading after fetching data
      }
    };
    
    getData();
  }, [user]);

  return (
    <div className="p-6 rounded-lg shadow-md">
      <h3 className="text-[#03045e] font-montserrat font-medium text-center lg:text-3xl text-xl">
        My Added Podcasts
      </h3>
      {loading ? (
        <p className="text-center text-gray-600 font-montserrat lg:text-xl text-[16px]">
          Loading podcasts...
        </p>
      ) : item.length === 0 ? (
        <p className="text-center text-gray-600 font-montserrat lg:text-xl text-[16px]">
          No podcasts found. You haven&apos;t added any podcasts yet.
        </p>
      ) : (
        <table className="min-w-full table-auto border-none">
          <thead className="">
            <tr>
              <th className="px-4 py-2">No.</th>
              <th className="px-4 py-2">Podcast Name</th>
              <th className="px-4 py-2">Creator</th>
              <th className="px-4 py-2">Likes</th>
              <th className="px-4 py-2">DisLikes</th>
              <th className="px-4 py-2">Comments</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {item.map((podcast, index) => (
              <motion.tr
                key={podcast._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2">{podcast.title}</td>
                <td className="border px-4 py-2">{podcast.creator}</td>
                <td className="border px-4 py-2 text-center">
                  {podcast.likes.length}
                </td>
                <td className="border px-4 py-2 text-center">
                  {podcast.dislikes.length}
                </td>
                <td className="border px-4 py-2 text-center">
                  {podcast.comments.length}
                </td>
                <td className="border px-4 py-2 text-center">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-lg mr-2">
                    Update
                  </button>
                  <button onClick={()=>handleDelete(_id)} className="bg-red-500 text-white px-3 py-1 rounded-lg">
                    Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyPodcasts;
