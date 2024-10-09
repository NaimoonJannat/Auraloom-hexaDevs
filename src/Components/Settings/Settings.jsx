'use client';
import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { getAuth, updateProfile } from 'firebase/auth';
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const Settings = () => {
    const [userName, setUserName] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    const { user } = useContext(AuthContext);
    const [followedCreators, setFollowedCreators] = useState([
        'Creator A',
        'Creator B',
        'Creator C'
    ]);

    // Function to handle profile update
    const handleUpdateProfile = async () => {
        if (!userName.trim()) {
            setMessage('Please enter a valid name.');
            return;
        }

        setLoading(true);
        setMessage('');

        const auth = getAuth();
        try {
            await updateProfile(auth.currentUser, {
                displayName: userName || user.displayName,
                photoURL: photoURL || user.photoURL,
            });
            setMessage('Profile updated successfully!');
        } catch (error) {
            setMessage(`Error updating profile: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    // Function to handle unfollowing a creator
    const handleUnfollow = (creator) => {
        setFollowedCreators(followedCreators.filter((c) => c !== creator));
    };

    return (
        <div>
            <div className="min-h-screen font-montserrat bg-gray-100 p-4 flex flex-col items-center">
                <motion.div
                    className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>

                    {/* Profile Update Form */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            value={userName}
                            placeholder={user?.displayName || 'Enter your name'}
                            onChange={(e) => setUserName(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            
                            
                            value={photoURL}
                            placeholder={user?.photoURL || 'Enter your photo URL'}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <button
                        onClick={handleUpdateProfile}
                        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                        disabled={loading}
                    >
                        {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                    {message && (
                        <motion.p
                            className="mt-4 text-center text-sm text-gray-600"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {message}
                        </motion.p>
                    )}
                </motion.div>

                <motion.div
                    className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold mb-4">Manage Followed Creators</h2>

                    {followedCreators.length > 0 ? (
                        followedCreators.map((creator, index) => (
                            <motion.div
                                key={index}
                                className="flex justify-between items-center py-2 border-b"
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="text-gray-700">{creator}</span>
                                <button
                                    className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-300"
                                    onClick={() => handleUnfollow(creator)}
                                >
                                    Unfollow
                                </button>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-gray-600">You are not following any creators.</p>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Settings;
