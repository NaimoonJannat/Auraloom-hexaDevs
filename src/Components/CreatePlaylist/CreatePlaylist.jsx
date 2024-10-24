'use client';
import Image from 'next/image';
import img1 from '../../../public/pexels-dmitry-demidov-515774-3783471.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PlaylistHeading from '../Heading/PlaylistHeading';
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const CreatePlaylist = () => {
    //const [playlistName, setPlaylistName] = useState('');
    const [playlists, setPlaylists] = useState([]);
    const [error, setError] = useState('')
    const { user } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;

        const newPlaylist = {
            name,
            email: user?.email,
            userName: user?.displayName,
        };

        try {
            const response = await axios.post('https://auraloom-hexa-devs.vercel.app/playlists', newPlaylist);
            console.log('Playlist created:', response.data);
            // Optionally, reset form or show success message
        } catch (error) {
            console.error('Error creating playlist:', error);
        }
    };

    useEffect(() => {
        // Fetch playlists only if the user is logged in
        const fetchPlaylists = async () => {
            if (user?.email) {
                try {
                    const response = await axios.get(`https://auraloom-hexa-devs.vercel.app/playlists/${user.email}`);
                    setPlaylists(response.data);
                } catch (error) {
                    console.error('Error fetching playlists:', error);
                }
            }
        };

        fetchPlaylists();
    }, [user]);




    return (
        <div>

            <PlaylistHeading title={"My Playlist"}></PlaylistHeading>

            <div className='lg:flex items-start mx-auto font-montserrat'>
                <div className="mx-auto dark:text-gray-800 border border-[#0077b6] scale-90 rounded-md">
                    <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded ">
                        <Image src={img1} alt="Image" className="w-full h-60 sm:h-96 object-cover p-4" />

                        <div className="p-6 pb- m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50 shadow">
                            <div className="space-y-2">
                                <a href="#" className="inline-block text-2xl font-semibold sm:text-3xl text-[#0077b6]">Start Building Your Playlist</a>
                            </div>

                            {/* FORM */}
                            <form onSubmit={handleSubmit}>
                                <div className='form-control'>
                                    <label
                                        htmlFor="name"
                                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                                    >
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Type here"
                                            name='name'
                                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                            required // Ensure the input is filled before submission
                                        />
                                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                                            Give a name
                                        </span>
                                    </label>
                                </div>

                                <button type="submit" className="mt-4 px-8 py-3 font-semibold rounded-full border border-[#0077b6] hover:bg-[#0077b6] hover:text-white mx-auto">
                                    Create
                                </button>
                            </form>

                        </div>
                    </div>
                </div>


                {/* AVAILABLE PLAYLISTS */}
                <div className="w-full max-w-md px-8 py-4 mx-auto mt-8 border border-[#0077b6] rounded-lg">
                    <div className="flex my-4">
                        <a href="#" className="text-2xl text-[#0077b6] font-bold">Available Playlists</a>
                    </div>

                    <div className="mx-auto max-w-md overflow-hidden rounded-lg">
                        <ul className="divide-y divide-gray-100 py-2">
                            {playlists.length === 0 ? (
                                <p>No playlists available.</p>
                            ) : (
                                playlists.map(playlist => (
                                    <li key={playlist._id} className="flex gap-4 py-4 ">
                                        <Link href={`/playlists/${playlist._id}`}>
                                            <div className="flex gap-4 items-center w-full rounded-md hover:border">
                                                <div>
                                                    <Image src={img1} className="h-20 w-20 rounded-lg object-cover" alt="Playlist Image 1" />
                                                </div>
                                                <div className="mr-4 flex-1">
                                                    <h4 className="text-lg font-medium text-gray-900">
                                                        {playlist.name}
                                                    </h4>
                                                    <div className="mt-1 text-xs text-gray-400">
                                                        <span>Playlist by</span> • <time className='text-xs hover:underline text-[#0077b6]'>{playlist.userName}</time>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePlaylist;
