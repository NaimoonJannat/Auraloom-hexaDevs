import Image from 'next/image';
import img1 from '../../../public/pexels-dmitry-demidov-515774-3783471.jpg'
import { IoIosAddCircleOutline } from "react-icons/io";

const createPlaylist = () => {
    return (
        <div>
            <span className="relative flex justify-center  mt-20 text-xl font-bold">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                ></div>
                <span className="relative z-10 bg-white text-2xl px-6 text-[#0077b6]  font-montserrat">Create Playlist</span>
            </span>


            <div className=" mx-auto dark:text-gray-800">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded scale-75">

                    <Image src={img1} alt="" className="w-full h-60 sm:h-96" />
                    <div className="p-6 pb- m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                        <div className="space-y-2 text-center">
                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">Let's Start Building Your Playlist</a>
                            <p className="font-semibold  dark:text-gray-600">
                                <a rel="noopener noreferrer" href="#" className="text-sm hover:underline text-[#00b4d8]">Leroy Jenkins</a>
                            </p>
                        </div>

                        <div className="flex justify-center scale-90">
                            <button type="button" className="px-8 py-3 font-semibold rounded-full bg-slate-200 hover:bg-[#90e0ef] flex items-center gap-2 text-lg">Add here <IoIosAddCircleOutline className='text-xl text-[#0077b6] font-bold' /> </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* MODAL */}
            <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <h2 className="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 fill-current shrink-0 dark:text-violet-600">
                        <path d="M451.671,348.569,408,267.945V184c0-83.813-68.187-152-152-152S104,100.187,104,184v83.945L60.329,348.568A24,24,0,0,0,81.432,384h86.944c-.241,2.636-.376,5.3-.376,8a88,88,0,0,0,176,0c0-2.7-.135-5.364-.376-8h86.944a24,24,0,0,0,21.1-35.431ZM312,392a56,56,0,1,1-111.418-8H311.418A55.85,55.85,0,0,1,312,392ZM94.863,352,136,276.055V184a120,120,0,0,1,240,0v92.055L417.137,352Z"></path>
                        <rect width="32" height="136" x="240" y="112"></rect>
                        <rect width="32" height="32" x="240" y="280"></rect>
                    </svg>Necessitatibus dolores quasi quae?
                </h2>
                <p className="flex-1 dark:text-gray-600">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                <div className="flex flex-col justify-end gap-3 mt-6 sm:flex-row">
                    <button className="px-6 py-2 rounded-sm">No</button>
                    <button className="px-6 py-2 rounded-sm shadow-sm dark:bg-violet-600 dark:text-gray-50">Yes</button>
                </div>
            </div>

        </div>
    );
};

export default createPlaylist;