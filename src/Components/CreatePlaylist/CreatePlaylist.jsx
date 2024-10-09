'use client';
import Image from 'next/image';
import img1 from '../../../public/pexels-dmitry-demidov-515774-3783471.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import { useRouter } from 'next/router';
import { useRouter } from "next/navigation";

const CreatePlaylist = () => {
    const [playlistName, setPlaylistName] = useState('');
    const [availablePlaylists, setAvailablePlaylists] = useState([])
    const [error, setError] = useState(null); // For handling errors
    const [isMounted, setIsMounted] = useState(false); // Ensure component is mounted before using router
    const router = useRouter(); // Declare useRouter at the top of the component

    // Check if the component is mounted on the client-side
    useEffect(() => {
        setIsMounted(true);
        // Fetch existing recent playlists when the component is mounted
        fetchPlaylists();
    }, []);

    const fetchPlaylists = async () => {
        try {
            const response = await axios.get('http://localhost:5000/playlists');
            setAvailablePlaylists(response.data); // Assuming the API returns an array of playlists
        } catch (error) {
            console.error('Error fetching playlists:', error);
            setError('Failed to load recent playlists.');
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = playlistName;

        const newPlaylist = { name };
        console.log(newPlaylist);

        try {
            const response = await axios.post('http://localhost:5000/playlists', newPlaylist);
            console.log('Playlist created:', response.data);

            if (isMounted) {
                const playlistId = response.data.insertedId;
                // Navigate to the add-to-playlist page or the specific playlist page
                router.push(`/playlists/${playlistId}`);
            }

        } catch (error) {
            console.error('Error creating playlist:', error);
            setError('Failed to create playlist. Please try again.');
        }
    };

    if (!isMounted) return null;

    return (
        <div>
            <span className="relative flex justify-center my-10 font-bold">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 scale-75"
                ></div>

                <span className="relative z-10 bg-white px-6 text-2xl text-[#0077b6]">My Playlist</span>
            </span>

            <div className='lg:flex items-start mx-auto font-montserrat'>
                <div className="mx-auto dark:text-gray-800 border border-[#90e0ef] scale-90 rounded-md">
                    <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded ">
                        <Image src={img1} alt="Image" className="w-full h-60 sm:h-96 object-cover p-4" />

                        <div className="p-6 pb- m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50 shadow">
                            <div className="space-y-2">
                                <a href="#" className="inline-block text-2xl font-semibold sm:text-3xl">Start Building Your Playlist</a>
                                {/* <p className="font-semibold dark:text-gray-600">
                                    <a href="#" className="text-sm hover:underline text-[#00b4d8]">Sayeed Hossain</a>
                                </p> */}
                            </div>

                            {/* FORM */}
                            <form onSubmit={handleSubmit}>
                                <label
                                    htmlFor="name"
                                    className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                                >
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Type here"
                                        value={playlistName}
                                        onChange={(e) => setPlaylistName(e.target.value)}
                                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    />

                                    <span
                                        className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                                    >
                                        Give a name
                                    </span>
                                </label>

                                <button type="submit" className="mt-4 px-8 py-3 font-semibold rounded-full border border-[#90e0ef] hover:bg-[#00b4d8] mx-auto">
                                    Create
                                </button>
                            </form>

                            {error && <p className="text-red-600">{error}</p>}
                        </div>
                    </div>
                </div>

                {/* AVAILABLE PLAYLISTS */}
                <div className="w-full max-w-md px-8 py-4 mx-auto mt-8 border border-[#90e0ef] rounded-lg">
                    <div className="flex my-4">
                        <a href="#" className="text-2xl text-[#00b4d8] font-bold">Available Playlists</a>
                    </div>

                    <div className="mx-auto max-w-md overflow-hidden rounded-lg">
                        <ul className="divide-y divide-gray-100 py-2">
                            {
                                availablePlaylists.map(playlist => (
                                    <li key={playlist._id} className="flex gap-4 py-4">
                                        <div>
                                            <Image src={img1} className="h-20 w-20 rounded-lg object-cover" alt="Playlist Image 1" />
                                        </div>
                                        <div className="mr-4 flex-1">
                                            <h4 className="text-lg font-medium text-gray-900">{playlist.name}</h4>
                                            <div className="mt-1 text-sm text-gray-400">
                                                <span>Playlist by</span> • <time className='text-xs hover:underline text-[#00b4d8]'>Sayeed Hossain</time>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePlaylist;
