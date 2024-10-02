"use client";
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Typewriter } from 'react-simple-typewriter'
const AddPodcast = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [category, setCategory] = useState('');
  const [wallpaper, setWallpaper] = useState(null);
  const [audio, setAudio] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Creating FormData to send with the POST request
    const formData = new FormData();
    formData.append('title', title);
    formData.append('details', details);
    formData.append('category', category);

    if (wallpaper) {
      formData.append('wallpaper', wallpaper);
    }

    if (audio) {
      formData.append('audio', audio);
    }

    try {
      // Send data to the backend
      const response = await fetch('http://localhost:5000/upload-podcast', {
        method: 'POST',
        body: formData, // Important to send FormData
      });

      const data = await response.json();

      if (data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'Podcast Added Successfully',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        // Reset form
        setTitle('');
        setDetails('');
        setCategory('');
        setWallpaper(null);
        setAudio(null);
        event.target.reset(); // Reset the form fields
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Failed to add podcast',
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
      }
    } catch (error) {
      //console.error('Error uploading podcast:', error);
      Swal.fire({
        title: 'Error!',
        text: 'There was a problem with the upload',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  };

  return (
    <div className='mx-auto my-20 container flex  flex-col justify-center items-center'>
      <h1 className="mt-2 text-2xl lg:text-4xl font-bold text-[#03045e] capitalize  dark:text-white">
        <Typewriter
          words={['Bring Your Podcast to Life', 'Share Your Passion with the World!']}
          loop={10}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <main className="relative z-20 w-full m-8 md:flex md:items-center xl:mt-12">
        <div className="absolute inset-0 -z-10 md:h-[800px] rounded-2xl" style={{
          backgroundImage: `url('/soundwave.svg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <div className="flex-grow h-full my-14 md:w-1/2 flex items-center justify-center p-3 translate-y-10">
          <div className='flex flex-col  p-6 rounded-md sm:p-10 bg-[#90e0ef] bg-opacity-90 text-gray-900'>
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md"
              encType="multipart/form-data"
            >
              <h2 className="text-2xl font-bold mb-6 text-center text-[#03045e]">Upload New Podcast</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Title Field */}
              <div className="mb-4 col-span-2">
                <label className="block text-[#03045e] text-sm font-bold mb-2">
                  Title of Podcast
                </label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[#0077b6] leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter Podcast Title"
                  required
                />
              </div>

                {/* Details Field */}
                <div className="mb-4 col-span-2">
                <label className="block text-[#03045e] text-sm font-bold mb-2">
                  Details (Mini blog or description)
                </label>
                <textarea
                  name="details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[#0077b6] leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter podcast details"
                  rows="4"
                ></textarea>
              </div>

              {/* Wallpaper (Optional) */}
              <div className="mb-4">
                <label className="block text-[#03045e] text-sm font-bold mb-2">
                  Wallpaper (Optional)
                </label>
                <input
                  type="file"
                  name="wallpaper"
                  accept="image/*"
                  onChange={(e) => setWallpaper(e.target.files[0])}
                  className="block w-full text-sm text-[#0077b6] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                />
              </div>

              {/* Audio Upload */}
              <div className="mb-4">
                <label className="block text-[#03045e] text-sm font-bold mb-2">
                  Attach the Audio
                </label>
                <input
                  type="file"
                  name="audio"
                  accept="audio/*"
                  onChange={(e) => setAudio(e.target.files[0])}
                  className="block w-full text-sm text-[#0077b6] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                />
              </div>

            

              {/* Category Field */}
              <div className="mb-4 col-span-2">
                <label className="block text-[#03045e] text-sm font-bold mb-2">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[#0077b6] leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter podcast category"
                  required
                />
              </div>
              </div>
              {/* Submit Button */}
              <div className="flex items-center justify-center">
                <input
                  type="submit"
                  value="Upload Podcast"
                  className="bg-[#0077b6] hover:bg-[#03045e] w-full px-6 py-3 text-white font-bold  rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddPodcast;
