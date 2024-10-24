'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PlaylistHeading from '../Heading/PlaylistHeading';
import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { FaPlus } from 'react-icons/fa';
import img1 from '../../../public/pexels-dmitry-demidov-515774-3783471.jpg';

const CreatePlaylist = () => {
    const [playlists, setPlaylists] = useState([]);
    const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState(false);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    const testimonials = [
        // ... (same testimonials array)
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) {
            setInputError(true);
            return;
        }

        const newPlaylist = {
            name: inputValue,
            email: user?.email,
            userName: user?.displayName,
        };

        try {
            await axios.post('https://auraloom-hexa-devs.vercel.app/playlists', newPlaylist);
            setInputValue('');
            setInputError(false);
        } catch (error) {
            console.error('Error creating playlist:', error);
        }
    };

    useEffect(() => {
        const fetchPlaylists = async () => {
            if (user?.email) {
                setLoading(true);
                try {
                    const response = await axios.get(`https://auraloom-hexa-devs.vercel.app/playlists/${user.email}`);
                    setPlaylists(response.data);
                } catch (error) {
                    console.error('Error fetching playlists:', error);
                } finally {
                    setLoading(false);
                }
            }
        };

        const fetchFeaturedPlaylists = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://auraloom-hexa-devs.vercel.app/featured-playlists');
                setFeaturedPlaylists(response.data);
            } catch (error) {
                console.error('Error fetching featured playlists:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaylists();
        fetchFeaturedPlaylists();
    }, [user]);

    return (
        <div className="bg-gradient-to-r from-[#0077b6] to-[#90e0ef] min-h-screen py-10">
            <PlaylistHeading title={"My Playlist"} />

            <div className='lg:flex items-start mx-auto font-montserrat'>
                <div className="mx-auto dark:text-gray-800 border border-[#0077b6] scale-90 rounded-md shadow-lg">
                    <div className="relative flex flex-col max-w-3xl mx-auto overflow-hidden rounded ">
                        <Image src={img1} alt="Image" className="w-full h-60 sm:h-96 object-cover p-4" />
                        <div className="absolute inset-0 bg-black opacity-40" />
                        <div className="p-6 pb- m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50 shadow">
                            <h2 className="text-3xl font-bold sm:text-4xl text-white">Start Building Your Playlist</h2>

                            <form onSubmit={handleSubmit}>
                                <div className='form-control'>
                                    <label htmlFor="name" className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600">
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Type here"
                                            name='name'
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            className={`peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm ${inputError ? 'border-red-500' : ''}`}
                                            required
                                        />
                                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                                            Give a name
                                        </span>
                                        {inputError && <span className="text-red-500 text-xs">This field is required</span>}
                                    </label>
                                </div>

                                <button type="submit" className="mt-4 px-8 py-3 font-semibold rounded-full border border-[#0077b6] shadow-lg hover:bg-[#0077b6] hover:text-white mx-auto transition duration-200 flex items-center">
                                    <FaPlus className="mr-2" />
                                    Create
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* AVAILABLE PLAYLISTS */}
                <div className="w-full max-w-md px-8 py-4 mx-auto mt-8 border border-[#0077b6] rounded-lg shadow-lg">
                    <div className="flex my-4">
                        <h3 className="text-2xl text-[#0077b6] font-bold">Available Playlists</h3>
                    </div>

                    <div className="mx-auto max-w-md overflow-hidden rounded-lg">
                        <ul className="divide-y divide-gray-100 py-2">
                            {loading ? (
                                <p>Loading playlists...</p>
                            ) : playlists.length === 0 ? (
                                <p>No playlists available.</p>
                            ) : (
                                playlists.map(playlist => (
                                    <li key={playlist._id} className="flex gap-4 py-4">
                                        <Link href={`/playlists/${playlist._id}`}>
                                            <div className="flex gap-4 items-center w-full rounded-md hover:border shadow hover:shadow-lg transition duration-200">
                                                <div>
                                                    <Image src={img1} className="h-20 w-20 rounded-lg object-cover" alt="Playlist Image" />
                                                </div>
                                                <div className="mr-4 flex-1">
                                                    <h4 className="text-lg font-medium text-gray-900">{playlist.name}</h4>
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

            {/* Featured Playlists Section */}
            <div className="mt-12 bg-gradient-to-r from-[#90e0ef] to-[#00b4d8] p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-white mb-6">
                    Featured Playlists
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading ? (
                        <p>Loading featured playlists...</p>
                    ) : featuredPlaylists.length === 0 ? (
                        <p>No featured playlists available.</p>
                    ) : (
                        featuredPlaylists.map((playlist) => (
                            <Link key={playlist._id} href={`/playlists/${playlist._id}`} className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200">
                                <Image src={img1} className="h-12 w-12 rounded-lg object-cover mr-4" alt="Featured Playlist Image" />
                                <div>
                                    <h4 className="text-lg font-medium text-gray-900">{playlist.name}</h4>
                                    <div className="mt-1 text-xs text-gray-400">
                                        <span>Playlist by</span> • <time className='text-xs hover:underline text-[#0077b6]'>{playlist.userName}</time>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="mt-12 bg-gradient-to-r from-[#90e0ef] to-[#00b4d8] p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-white mb-6">
                    What Our Users Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="flex items-start p-4  rounded-lg shadow-md">
                            <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="h-12 w-12 rounded-full mr-4"
                            />
                            <div>
                                <p className="text-gray-700 italic">{testimonial.text}</p>
                                <p className="mt-2 font-semibold">{testimonial.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreatePlaylist;
