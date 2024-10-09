'use client';
import Image from 'next/image';
import img1 from '../../../public/pexels-dmitry-demidov-515774-3783471.jpg'
import { IoIosAddCircleOutline } from "react-icons/io";
import Link from 'next/link';

const CreatePlaylist = () => {

    const handleSubmit = async (e) => {
        e.preventDefault;


    }


    return (
        <div>
            <span className="relative flex justify-center  my-10 text-xl font-bold">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                ></div>
                <span className="relative z-10 text-4xl px-6 text-[#00b4d8]  font-montserrat">Create Playlist</span>
            </span>

            <div className='lg:flex items-start mx-auto font-montserrat'>

                <div className=" mx-auto dark:text-gray-800">
                    <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded scale-90">

                        <Image src={img1} alt="" className="w-full h-60 sm:h-96" />

                        <div className="p-6 pb- m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">

                            <div className="space-y-2">
                                <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">Start Building Your Playlist</a>
                                <p className="font-semibold  dark:text-gray-600">
                                    <a rel="noopener noreferrer" href="#" className="text-sm hover:underline text-[#00b4d8]">Sayeed Hossain</a>
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} action="">
                                <label
                                    htmlFor="name"
                                    className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                                >
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Type here"
                                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                                    />

                                    <span
                                        className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                                    >
                                        Give a name
                                    </span>
                                </label>
                            </form>

                            <div className='mx-auto justify-between'>
                            </div>
                            <Link href={'/add-to-playlist'}><button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-800 dark:text-gray-100 mx-auto">Create</button></Link>
                        </div>
                    </div>


                </div>

                <div className="w-full max-w-md px-8 py-4 mx-auto mt-8 border border-[#90e0ef] rounded-lg">
                    <div className="flex my-4">
                        <a href="#" className="text-2xl text-[#00b4d8] font-bold" tabindex="0" role="link">Recent Playlists</a>
                    </div>

                    <div class="mx-auto max-w-md overflow-hidden rounded-lg">
                        <ul class="divide-y divide-gray-100 py-2">
                            <li class="flex gap-4 py-4">
                                <div>
                                    <Image src={img1} class="h-20 w-20 rounded-lg object-cover" alt="" />
                                </div>
                                <div class="mr-4 flex-1">
                                    <h4 class="text-lg font-medium text-gray-900">Playlist-1</h4>
                                    <div class="mt-1 text-sm text-gray-400"><span>Playlist by</span> • <time>Sayeed Hossain</time></div>
                                </div>
                            </li>
                            <li class="flex gap-4 py-4">
                                <div>
                                    <Image src={img1} class="h-20 w-20 rounded-lg object-cover" alt="" />
                                </div>
                                <div class="mr-4 flex-1">
                                    <h4 class="text-lg font-medium text-gray-900">Playlist-2</h4>
                                    <div class="mt-1 text-sm text-gray-400"><span>Playlist by</span> • <time>Sayeed Hossain</time></div>
                                </div>
                            </li>


                        </ul>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default CreatePlaylist;