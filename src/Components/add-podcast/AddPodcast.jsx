"use client";
import axios from 'axios';
import { useState } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import Swal from 'sweetalert2';

const AddPodcast = () => {
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload image to Cloudinary
      const imgUrl = img ? await uploadFile('image') : null;

      // Upload audio to Cloudinary
      const audioUrl = await uploadFile('audio');

      // Collect form data
      const form = e.target;
      const title = form.title.value;
      const description = form.description.value;
      const category = form.category.value;

      const newPodcast = { title, description, category, imgUrl, audioUrl };

      // Send data to the backend to save in MongoDB
      const res = await axios.post('http://localhost:5000/podcasts', newPodcast);

      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Podcast Added Successfully",
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

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Upload New Podcast</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title of Podcast
          </label>
          <input
            type="text"
            name="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter Podcast Title"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Wallpaper (Optional)
          </label>
          <input
            type="file"
            name="wallpaper"
            accept="image/*"
            onChange={(e) => setImg(e.target.files[0])}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="audioFile">
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

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="details">
            Description (Mini blog or description)
          </label>
          <textarea
            name="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter podcast details"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <input
            type="text"
            name="category"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter podcast category"
          />
        </div>

        <div className="flex items-center justify-center">
          <input
            type="submit"
            value="Upload Podcast"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </form>

      {loading && (
        <CirclesWithBar
          height="100"
          width="100"
          color="#4F46E5"
          outerCircleColor="#4F46E5"
          innerCircleColor="#4F46E5"
          barColor="#4F46E5"
          ariaLabel="circles-with-bar-loading"
          visible={true}
        />
      )}
    </div>
  );
};

export default AddPodcast;
