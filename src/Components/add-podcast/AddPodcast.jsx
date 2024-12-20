"use client";
import axios from 'axios';
import { useContext, useState } from 'react';
import { CirclesWithBar } from 'react-loader-spinner';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import Loader from '../Loader/Loader';

const AddPodcast = () => {
  const [img, setImg] = useState(null);
  const [audio, setAudio] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);

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
      const creator = user.displayName;
      const email = user.email;
      const likes = [];
      const dislikes = [];
      const comments = [];
      const plays = [];
      
      const newPodcast = { title, creator, email, description, category, imgUrl, audioUrl, likes, dislikes, comments, plays };
      console.log(newPodcast);
      // Send data to the backend to save in MongoDB
      const res = await axios.post('https://auraloom-backend.vercel.app/podcasts', newPodcast);

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
    <div className='mx-auto container flex  flex-col justify-center items-center '>
      <main className="relative  w-full  md:flex md:items-center ">
        
        <div className="flex-1 h-full my-14  flex items-center justify-center p-3 translate-y-10">
          <div className='flex flex-col  p-6 rounded-md sm:p-10 bg-[#caf0f8] bg-opacity-90 text-gray-900'>


            {/*PODCAST FORM */}
            <form
              onSubmit={handleSubmit}
              className="w-full"
            >
              <h2 className="text-2xl font-bold mb-6 text-center text-[#03045e]">Upload New Podcast</h2>
              <div className="grid grid-cols-1 lg:grid-cols-9 gap-4">
                <div className="mb-4 lg:col-span-9 col-span-1">
                  <label className="block text-[#03045e] text-sm font-bold mb-2">
                    Title of Podcast
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter Podcast Title"
                    //
                    required
                  />
                </div>
                <div className="mb-4 lg:col-span-5 col-span-1">
                  <label className="block text-[#03045e] text-sm font-bold mb-2" htmlFor="details">
                    Description (Mini blog or description)
                  </label>
                  <textarea
                    name="description"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  dark:text-gray-200 bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter podcast details"
                    rows="4"
                  ></textarea>
                </div>

                <div className="mb-4 lg:col-span-2 col-span-1">
                  <label className="block text-[#03045e] text-sm font-bold mb-2">
                    Wallpaper (Optional)
                  </label>
                  <input
                    type="file"
                    name="wallpaper"
                    accept="image/*"
                    onChange={(e) => setImg(e.target.files[0])}
                    //
                    className="block w-full text-sm text-gray-500 p-4  rounded dark:text-gray-200 bg-white dark:bg-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                  />
                </div>

                <div className="mb-4 lg:col-span-2 col-span-1">
                  <label className="block text-[#03045e] text-sm  font-bold mb-2" htmlFor="audioFile">
                    Attach the Audio
                  </label>
                  <input
                    type="file"
                    name="audio"
                    accept="audio/*"
                    onChange={(e) => setAudio(e.target.files[0])}
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
                    placeholder="Enter podcast category"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <input
                  type="submit"
                  value="Upload Podcast"
                  className="bg-[#0077b6] hover:bg-[#03045e] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </form>

            {loading && <Loader></Loader>}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddPodcast;