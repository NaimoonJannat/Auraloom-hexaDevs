"use client";
import { useState } from 'react';
import Swal from 'sweetalert2';

const AddPodcast = () => {
 const handleSubmit = event =>{
  event.preventDefault();
  const form = event.target;
  const title=form.title.value;
  const details=form.details.value;
  const category=form.category.value;


  const newPodcast = {title, details, category};

  console.log(newPodcast);
  // send data to the server 
  fetch('http://localhost:5173/podcasts',{
    method: 'POST',
    headers: {
        'content-type' : 'application/json'
    },
    body: JSON.stringify(newPodcast)

})
.then(res => res.json())
.then(data => {
    console.log(data);
    Swal.fire({
            title: "Success!",
            text: "Podcast Added Successfully",
            icon: "success",
            confirmButtonText: 'Ok'
          });
          form.reset();
    
})


 }
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
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
            
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="details">
            Details (Mini blog or description)
          </label>
          <textarea
            name="details"
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
    </div>
  );
};

export default AddPodcast;
