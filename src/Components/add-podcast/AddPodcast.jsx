"use client";
import React, { useState } from 'react';
import Swal from 'sweetalert2';

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Upload New Podcast</h2>

        {/* Title Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title of Podcast
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter Podcast Title"
            required
          />
        </div>

        {/* Wallpaper (Optional) */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Wallpaper (Optional)
          </label>
          <input
            type="file"
            name="wallpaper"
            accept="image/*"
            onChange={(e) => setWallpaper(e.target.files[0])}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
          />
        </div>

        {/* Audio Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Attach the Audio
          </label>
          <input
            type="file"
            name="audio"
            accept="audio/*"
            onChange={(e) => setAudio(e.target.files[0])}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
          />
        </div>

        {/* Details Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Details (Mini blog or description)
          </label>
          <textarea
            name="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter podcast details"
            rows="4"
          ></textarea>
        </div>

        {/* Category Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter podcast category"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <input
            type="submit"
            value="Upload Podcast"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </form>
    </div>
  );
};

export default AddPodcast;
