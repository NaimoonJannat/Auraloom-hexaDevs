'use client';
import Image from 'next/image';
import { FaPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img7 from '../../../public/undraw_audio_player_re_cl20.svg';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const CreatePlaylist = () => {
    const [playlists, setPlaylists] = useState([]);
    const { user } = useContext(AuthContext);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.photoURL.value; // Capture image URL

        const newPlaylist = {
            name,
            email: user?.email,
            userName: user?.displayName,
            image,
        };

        try {
            const response = await axios.post('https://auraloom-backend.vercel.app/playlists', newPlaylist);
            console.log('Playlist created:', response.data);

            // Update the playlists state to include the new playlist
            setPlaylists((prevPlaylists) => [...prevPlaylists, response.data]);
        } catch (error) {
            console.error('Error creating playlist:', error);
        }
    };

    // Fetch playlists for the user on load
    useEffect(() => {
        const fetchPlaylists = async () => {
            if (user?.email) {
                try {
                    const response = await axios.get(`https://auraloom-backend.vercel.app/playlists/${user.email}`);
                    setPlaylists(response.data);
                } catch (error) {
                    console.error('Error fetching playlists:', error);
                }
            }
        };
        fetchPlaylists();
    }, [user]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 6;

    const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
    const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, Math.floor(playlists.length / itemsPerPage)));

    return (
        <div>
            <section className="relative flex flex-wrap lg:h-screen items-center">
                <div className="w-full px-6 py-12 sm:px-8 sm:py-16 lg:w-1/2 lg:px-12 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-3xl font-bold text-[#0077b6] sm:text-4xl">Create New Playlist</h1>
                        <p className="mt-4">
                            Personalize your podcast experience by creating custom playlists. Add a unique name, upload an image, and organize
                            your favorite podcasts all in one place.
                        </p>
                    </div>

                    {/* FORM */}
                    <form onSubmit={handleSubmit} action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-6">
                        <div>
                            <label htmlFor="playlistName" className="block text-sm font-medium  mb-2">
                                Playlist Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                className="w-full rounded-full border border-gray-300 focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6] p-4 text-sm shadow-sm"
                                placeholder="Give a name"
                            />
                        </div>

                        <div>
                            <label htmlFor="photoURL" className="block text-sm font-medium  mb-2">
                                Image URL
                            </label>
                            <input
                                type="text"
                                name="photoURL"
                                className="w-full rounded-full border border-gray-300 focus:border-[#0077b6] focus:ring-1 focus:ring-[#0077b6] p-4 text-sm shadow-sm"
                                placeholder="Add an image URL"
                            />
                        </div>

                        <button
                            type="submit"
                            className="inline-flex items-center justify-center w-full rounded-full bg-[#0077b6] px-5 py-3 text-sm font-medium text-white shadow-md transition-transform transform hover:scale-105 hover:bg-[#005f99] space-x-2"
                        >
                            <FaPlus className="text-white" />
                            <span>Create</span>
                        </button>
                    </form>
                </div>

                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent opacity-60"></div>
                    <Image
                        src={img7}
                        alt="Playlist background"
                        width={500}
                        height={500}
                        className="absolute inset-0 object-cover mt-40"
                    />
                </div>
            </section>

            {/* MY PLAYLISTS */}
            <div className="mx-auto max-w-screen-xl px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">My Playlists</h2>
                    <div className="flex space-x-2">
                        <button onClick={handlePrev} disabled={currentIndex === 0} className="p-2 rounded-full  hover:bg-gray-300 transition">
                            <FaChevronLeft />
                        </button>
                        <button onClick={handleNext} disabled={currentIndex >= Math.floor(playlists.length / itemsPerPage)} className="p-2 rounded-full  hover:bg-gray-300 transition">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
                <hr className="py-6" />

                {/* PLAYLIST CARD */}
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 overflow-hidden">
                    {playlists.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage).map((playlist) => (
                        <div
                            key={playlist.id}
                            className=""
                        >
                            <div className='group relative mb-2 block overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3'>
                                <Image
                                    src={playlist.image || '/default-image.jpg'} // Provide a fallback image path
                                    alt={playlist.name || 'Playlist Image'}
                                    width={500}
                                    height={500}
                                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div class="flex flex-col">
                                <a href="#" class="text-lg font-bold transition duration-100 hover:text-gray-500 lg:text-xl">{playlist.name}</a>
                                <span class="">by {playlist.userName}</span>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default CreatePlaylist;
