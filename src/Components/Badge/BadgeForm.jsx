import { useState } from "react";
import Swal from "sweetalert2";

const BadgeForm = () => {
  const [badgeName, setBadgeName] = useState("");
  const [criteria, setCriteria] = useState("");
  const [value, setValue] = useState("");
  const [badgeImage, setBadgeImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to upload image to Cloudinary
  const uploadBadgeImage = async () => {
    const data = new FormData();
    data.append("file", badgeImage);
    data.append("upload_preset", 'image_preset'); // Replace with your actual upload preset

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/auraloom/image/upload", {
        method: "POST",
        body: data,
      });
      const imgData = await res.json();
      return imgData.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    // Validate value field to ensure it's a number
    const numericValue = Number(value);
    if (isNaN(numericValue) || numericValue <= 0) {
      Swal.fire({
        title: "Error!",
        text: "Value must be a positive number.",
        icon: "error",
        confirmButtonText: "Close",
      });
      setLoading(false);
      return;
    }
  
    try {
      // Upload image to Cloudinary
      const imageUrl = badgeImage ? await uploadBadgeImage() : null;
  
      // Check if imageUrl is still null after the upload
      if (badgeImage && !imageUrl) {
        Swal.fire({
          title: "Error!",
          text: "Failed to upload badge image. Please try again.",
          icon: "error",
          confirmButtonText: "Close",
        });
        setLoading(false);
        return;
      }
  
      // Construct badge object with `value` as a number
      const badgeData = {
        name: badgeName,
        criteria,
        value: numericValue, // Ensure value is a number
        imageUrl,
      };
      console.log("Badge Data:", badgeData);
  
      // Send badge data to the backend
      const response = await fetch("http://localhost:5000/badges", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(badgeData),
      });
  
      const result = await response.json();
      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Badge added successfully.",
          icon: "success",
          confirmButtonText: "Ok",
        });
      } else {
        console.error("Failed to add badge:", result.message);
        Swal.fire({
          title: "Error!",
          text: result.message || "Failed to add badge. Please try again.",
          icon: "error",
          confirmButtonText: "Close",
        });
      }
  
      setLoading(false);
      setBadgeName("");
      setCriteria("");
      setValue(0); // Reset value to 0
      setBadgeImage(null);
    } catch (error) {
      console.error("Error adding badge:", error);
      Swal.fire({
        title: "Error!",
        text: "An unexpected error occurred. Please try again.",
        icon: "error",
        confirmButtonText: "Close",
      });
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#CFF1F9] w-1/2 p-10 rounded-lg mx-auto">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="gap-4">
          <div className="mb-4 lg:col-span-9 col-span-1">
            <label className="block text-[#03045e] text-sm font-bold mb-2">
              Name of Badge
            </label>
            <input
              type="text"
              name="badgeName"
              value={badgeName}
              onChange={(e) => setBadgeName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter Badge Name"
              required
            />
          </div>

          <div className="lg:flex gap-4">
            <div className="mb-4 w-full">
              <label className="block text-[#03045e] text-sm font-bold mb-2">
                Criteria (e.g., number of plays or duration)
              </label>
              <input
                type="text"
                name="criteria"
                value={criteria}
                onChange={(e) => setCriteria(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter Badge Criteria"
                required
              />
            </div>

            <div className="mb-4 w-full">
              <label className="block text-[#03045e] text-sm font-bold mb-2">
                Value
              </label>
              <input
                type="number"
                name="value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter Value for Badge"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[#03045e] text-sm font-bold mb-2">
              Badge Image
            </label>
            <input
              type="file"
              name="badgeImage"
              accept="image/*"
              onChange={(e) => setBadgeImage(e.target.files[0])}
              className="block w-full text-sm text-gray-500 p-4 rounded dark:text-gray-200 bg-white dark:bg-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <input
            type="submit"
            value="Add Badge"
            className="bg-[#0077b6] hover:bg-[#03045e] w-fit text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        {loading && <p>Loading...</p>}
      </form>
    </div>
  );
};

export default BadgeForm;
