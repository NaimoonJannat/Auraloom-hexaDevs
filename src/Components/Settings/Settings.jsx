'use client';
import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { getAuth, updateProfile } from 'firebase/auth';
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import Image from "next/image";

const Settings = () => {
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const { user } = useContext(AuthContext);
    const [followedCreators, setFollowedCreators] = useState([
        'Naimoon Jannat Prapti',
        'Jannatul Ferdaus Mirza',
        'Monira Islam',
        'Raisa Nuzhat'
    ]);

    // Function to handle profile update
    // const handleUpdateProfile = async () => {
    //     if (!userName.trim()) {
    //         setMessage('Please enter a valid name.');
    //         return;
    //     }

    //     setLoading(true);
    //     setMessage('');

    //     const auth = getAuth();
    //     try {
    //         await updateProfile(auth.currentUser, {
    //             displayName: userName || user.displayName,
    //             photoURL: photoURL || user.photoURL,
    //         });
    //         setMessage('Profile updated successfully!');
    //     } catch (error) {
    //         setMessage(`Error updating profile: ${error.message}`);
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
    const handleUpdateProfile = async () => {
        if (!userName.trim()) {
            setMessage('Please enter a valid name.');
            return;
        }
    
        setLoading(true);
        setMessage('');
    
        const auth = getAuth();
        try {
            // Update the profile in Firebase Authentication
            await updateProfile(auth.currentUser, {
                displayName: userName || user.displayName,
                photoURL: photoURL || user.photoURL,
            });
    
            // Prepare the user data to update in the users collection
            const updatedUserData = {
                name: userName || user.displayName,
                photoURL: photoURL || user.photoURL,
            };
    
            // Update the user in your backend database
            const response = await fetch(`https://auraloom-backend.vercel.app/users/update/${auth.currentUser.uid}`, {
                method: 'PATCH',  // Or 'PATCH' based on your backend setup
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUserData),
            });
    
            if (!response.ok) {
                throw new Error("Failed to update user data in the database.");
            }
    
            setMessage('Profile updated successfully!');
        } catch (error) {
            setMessage(`Error updating profile: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };
    
    const handleUnfollow = (creator) => {
        setFollowedCreators(followedCreators.filter((c) => c !== creator));
    };

    return (
        <div className="min-h-screen  font-montserrat flex ">
                 
      <button
        className="block md:hidden p-4 focus:outline-none"
        onClick={toggleSidebar}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
            {/* Sidebar */}
            <aside className={`fixed inset-0 bg-[#90e0ef] p-6 lg:relative lg:translate-x-0 transition-transform transform ${isSidebarOpen ? "translate-x-0 " : "-translate-x-full"}  w-3/4 lg:w-1/5 `}>
                <h2 className="text-xl font-semibold mb-4">Account</h2>
                <nav className="space-y-4">
                    <a href="#personal-info" className="block light:text-gray-800 hover:text-indigo-600">Personal Info</a>
                    <a href="#preferences" className="block light:text-gray-800 hover:text-indigo-600">Preferences</a>
                    <a href="#about-us" className="block light:text-gray-800 hover:text-indigo-600">About Us</a>

                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 space-y-12">
                <motion.div
                    className=" shadow-lg rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {/* Personal Info Section */}
                    <motion.div
                        id="personal-info"
                        className="mb-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <h2 className="text-2xl font-bold mb-4 light:text-sky-950 ">Personal Info</h2>

                        {/* Profile Picture */}
                        <div className="mb-6 flex items-center">
                            <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden">
                                <Image
                                    alt="profile"
                                    src={photoURL || user?.photoURL || 'https://via.placeholder.com/150'}
                                    width={80}
                                    height={80}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <input
                                type="text"
                                value={photoURL}
                                placeholder="Enter your photo URL"
                                onChange={(e) => setPhotoURL(e.target.value)}
                                className="ml-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* Name Input */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                value={userName}
                                placeholder={user?.displayName || 'Enter your name'}
                                onChange={(e) => setUserName(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <button
                            onClick={handleUpdateProfile}
                            className="w-full bg-[#00b4d8] rounded-lg hover:bg-[#0077b6] text-white py-2  transition duration-300"
                            disabled={loading}
                        >
                            {loading ? 'Saving...' : 'Save Changes'}
                        </button>
                        {message && (
                            <motion.p
                                className="mt-4 text-center text-sm text-gray-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                            >
                                {message}
                            </motion.p>
                        )}
                    </motion.div>

                    Other Sections with Animations
                    {/* <motion.div
                        id="preferences"
                        className="mb-20"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                    >


                        Unfollow Creators Section
                        <h3 className="text-xl font-bold mb-4 light:text-sky-950">Followed Creators</h3>
                        {followedCreators.length > 0 ? (
                            followedCreators.map((creator, index) => (
                                <motion.div
                                    key={index}
                                    className="flex justify-between items-center py-3 border-b"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="light:text-gray-700">{creator}</span>
                                    <button
                                        className="bg-[#00b4d8] rounded-lg hover:bg-[#0077b6] text-white py-1 px-3  transition duration-300"
                                        onClick={() => handleUnfollow(creator)}
                                    >
                                        Unfollow
                                    </button>
                                </motion.div>
                            ))
                        ) : (
                            <p className="text-gray-600">You are not following any creators.</p>
                        )}
                    </motion.div> */}


                    <motion.div id="about-us" className="mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 2, ease: 'easeOut' }}>
                        <h2 className="text-2xl font-bold mb-4 light:text-sky-950">About Us</h2>

                        <p className="light:text-gray-600 mb-4">
                            Welcome to Auraloom, your go-to platform for discovering, sharing, and enjoying the world of podcasts. Our mission is to connect creators and listeners through a seamless audio experience, where ideas flow freely, stories come to life, and voices are heard.
                        </p>
                        <p className="light:text-gray-600 mb-4">
                            At Auraloom, we believe that every story deserves to be shared, and every voice has the power to inspire. Whether you are a seasoned podcaster or a passionate listener, our platform provides the tools and community you need to dive deeper into the topics you love.
                        </p>
                        <p className="light:text-gray-600 mb-4">
                            We are committed to fostering a space where creativity thrives, and where users can connect with creators, follow their favorite podcasts, and engage in meaningful conversations. Our easy-to-use interface and advanced features, like personalized recommendations and community interaction, ensure that you have the best experience possible.
                        </p>
                        <p className="light:text-gray-600">
                            Join us on this journey to explore new ideas, learn something new, and find your next favorite podcast. Thank you for being a part of the Auraloom community, where every voice matters.
                        </p>
                    </motion.div>



                </motion.div>
            </main>
        </div>
    );
};

export default Settings;

