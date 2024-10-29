"use client";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { CirclesWithBar } from 'react-loader-spinner';
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import Loader from '../Loader/Loader';

const MyPodcasts = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  // const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [img, setImg] = useState(null);
  const [audio, setAudio] = useState(null);
  const [loading, setLoading] = useState(false);


  // Function to upload image/audio to Cloudinary
  const uploadFile = async (type) => {
    const data = new FormData();
    data.append("file", type === 'image' ? img : audio);
    data.append("upload_preset", type === 'image' ? 'image_preset' : 'audios_preset');

    try {
      let resourceType = type === 'image' ? 'image' : 'raw';
      let api = `https://api.cloudinary.com/v1_1/auraloom/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      return secure_url;
    } catch (error) {
      console.log(error);
    }
  }

  // Function to handle form submission
  const handlingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload image to Cloudinary
      const imgUrl = img ? await uploadFile('image') : null;

      // Upload audio to Cloudinary
      const audioUrl = await uploadFile('audio');

      // Collect form data
      const form = e.target;
      const id = form.id.value;
      const title = form.title.value;
      const description = form.description.value;
      const category = form.category.value;
      const creator = user.displayName;
      const email = user.email;
      const likes = [];
      const dislikes = [];
      const comments = [];

      const newPodcast = { title, creator, email, description, category, imgUrl, audioUrl, likes, dislikes, comments };
      console.log(newPodcast);
      // Send data to the backend to save in MongoDB
      const res = await axios.patch(`https://auraloom-backend.vercel.app/podcasts/${id}`, newPodcast);

      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Podcast Updated Successfully",
          icon: "success",
          confirmButtonText: 'Ok'
        });
        form.reset();
      }

      setImg(null);
      setAudio(null);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // const onSubmit = (data, e) => {
  //   fetch("https://trioeats-server.vercel.app/gallery", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       //   Swal.fire({
  //       //       title: 'Success!',
  //       //       text: 'Successfully Added',
  //       //       icon: 'success',
  //       //       confirmButtonText: 'Okay'
  //       //     })
  //       setGallery([...gallery, data]);
  //       e.target.reset();
  //       location.reload();
  //     });
  // };

  useEffect(() => {
    if (!user?.email) return;

    const getData = async () => {
      try {
        setLoading(true);
        const { data } = await axios(
          `https://auraloom-backend.vercel.app/creator-podcasts/${user?.email}`
        );
        setItem(data);
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      } finally {
        setLoading(false); 
      }
    };

    getData();
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://auraloom-backend.vercel.app/podcasts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setItem(item.filter((i) => i._id !== id));
            }
          });
      }
    });
  };

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
        <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-none">
          <thead className="">
            <tr>
              <th className="px-4 py-2 text-xs md:text-base">No.</th>
              <th className="px-4 py-2 text-xs md:text-base">Podcast Name</th>
              <th className="px-4 py-2 text-xs md:text-base">Creator</th>
              <th className="px-4 py-2 text-xs md:text-base">Likes</th>
              <th className="px-4 py-2 text-xs md:text-base">DisLikes</th>
              <th className="px-4 py-2 text-xs md:text-base">Comments</th>
              <th className="px-4 py-2 text-xs md:text-base">Actions</th>
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
                  <div className="flex flex-wrap justify-center gap-2 ">
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg mr-2"
                  >
                    Update
                  </button>
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box bg-[#CAF0F8] h-[1000px] overflow-auto">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      <div className="mx-auto container flex  flex-col justify-center items-center z-10">
                        <main className="relative z-10 w-full  md:flex md:items-center -mt-[20px]">
                          <div className="flex-1 h-full w-full flex items-center justify-center translate-y-10">
                            <div className="flex flex-col rounded-md lg:p-0 sm:p-10 bg-[#caf0f8] bg-opacity-90 text-gray-900">
                              {/*PODCAST FORM */}
                              <form onSubmit={handlingSubmit} className="w-full">
                                <h2 className="text-2xl font-bold mb-6 text-center text-[#03045e]">
                                  Update Existing Podcast
                                </h2>
                                <div className="grid grid-cols-1 lg:grid-cols-9 gap-4">
                                  <div className="mb-4 lg:col-span-9 col-span-1">
                                    <label className="block text-[#03045e] text-sm font-bold mb-2">
                                      Title of Podcast
                                    </label>
                                    <input
                                      type="text"
                                      name="title"
                                      defaultValue={podcast.title}
                                      className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                      
                                      //
                                      required
                                    />
                                    <input type="text" name="id" defaultValue={podcast._id} className="hidden" />
                                  </div>
                                  <div className="mb-4 lg:col-span-9 col-span-1">
                                    <label
                                      className="block text-[#03045e] text-sm font-bold mb-2"
                                      htmlFor="details"
                                    >
                                      Description (Mini blog or description)
                                    </label>
                                    <textarea
                                      name="description"
                                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  dark:text-gray-200 bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                      defaultValue={podcast.description}
                                      rows="4"
                                    ></textarea>
                                  </div>

                                  <div className="mb-4 lg:col-span-9 col-span-1">
                                    <label className="block text-[#03045e] text-sm font-bold mb-2">
                                      Wallpaper (Optional)
                                    </label>
                                    <input
                                      type="file"
                                      name="wallpaper"
                                      accept="image/*"
                                      onChange={(e) =>
                                        setImg(e.target.files[0])
                                      }
                                      //
                                      className="block w-full text-sm text-gray-500 p-4  rounded dark:text-gray-200 bg-white dark:bg-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                                    />
                                  </div>

                                  <div className="mb-4 lg:col-span-9 col-span-1">
                                    <label
                                      className="block text-[#03045e] text-sm  font-bold mb-2"
                                      htmlFor="audioFile"
                                    >
                                      Attach the Audio
                                    </label>
                                    <input
                                      type="file"
                                      name="audio"
                                      accept="audio/*"
                                      onChange={(e) =>
                                        setAudio(e.target.files[0])
                                      }
                                      className="block w-full text-sm p-4 text-gray-500  rounded dark:text-gray-200 bg-white dark:bg-gray-800  file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                                    />
                                  </div>

                                  <div className="mb-4 lg:col-span-9 col-span-1">
                                    <label className="block text-[#03045e] text-sm font-bold mb-2">
                                      Category
                                    </label>
                                    <input
                                      type="text"
                                      name="category"
                                      className="shadow appearance-none border rounded w-full py-2 px-3 dark:text-gray-200 bg-white dark:bg-gray-800   leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                      defaultValue={podcast.category}
                                    />
                                  </div>
                                </div>
                                <div className="flex items-center justify-center">
                                  <input
                                    type="submit"
                                    value="Update Podcast"
                                    className="bg-[#0077b6] hover:bg-[#03045e] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  />
                                </div>
                              </form>

                              {loading && <Loader></Loader>}
                            </div>
                          </div>
                        </main>
                      </div>
                    </div>
                  </dialog>
                  <button
                    onClick={() => handleDelete(podcast._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                  </div>
                
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
    </div>
  );
};

export default MyPodcasts;
