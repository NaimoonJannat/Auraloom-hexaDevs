import Image from 'next/image';
import React from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";

const page = () => {
    return (
        <div>


            <div className="flex justify-center scale-90">
                <button type="button" onClick={() => document.getElementById('my_modal_1').showModal()} className="px-8 py-3 font-semibold rounded-full bg-slate-200 hover:bg-[#90e0ef] flex items-center gap-2 text-lg">Add here <IoIosAddCircleOutline className='text-xl text-[#0077b6] font-bold' /> </button>
            </div>


            {/* MODAL */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box max-w-4xl">
                    {/* CARD */}
                    <div className="bg-white ">
                        <div className="mx-auto max-w-screen-xl px-4 md:px-8">

                            <div className="">

                                <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6 scale-90">
                                    <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                        <Image
                                            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                                            loading="lazy"
                                            alt="Image description"
                                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                            width={600}  // specify the width based on the image's size
                                            height={400} // specify the height based on the image's aspect ratio
                                        />
                                    </a>


                                    <div className="flex flex-col gap-2">
                                        <span className="text-sm text-gray-400">July 19, 2021</span>

                                        <h2 className="text-xl font-bold text-gray-800">
                                            <a href="#" className="transition duration-100 hover:text-[#00b4d8] active:text-[#0077b6]">New trends in Tech</a>
                                        </h2>

                                        <p className="">This is a section of some simple filler text... </p>

                                        <div>
                                            <a href="#" className="font-semibold text-[#00b4d8] transition duration-100 hover:text-[#0077b6] active:text-indigo-700">Read more</a>
                                        </div>
                                    </div>

                                    <div>
                                        <button className='lg:pl-10'><IoIosAddCircleOutline className='text-3xl font-bold hover:text-[#0077b6]' /></button>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6 scale-90">
                                    <a href="#" className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                                        <Image
                                            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                                            loading="lazy"
                                            alt="Image description"
                                            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                            width={600}  // specify the width based on the image's size
                                            height={400} // specify the height based on the image's aspect ratio
                                        />
                                    </a>


                                    <div className="flex flex-col gap-2">
                                        <span className="text-sm text-gray-400">July 19, 2021</span>

                                        <h2 className="text-xl font-bold text-gray-800">
                                            <a href="#" className="transition duration-100 hover:text-[#00b4d8] active:text-[#0077b6]">New trends in Tech</a>
                                        </h2>

                                        <p className="">This is a section of some simple filler text... </p>

                                        <div>
                                            <a href="#" className="font-semibold text-[#00b4d8] transition duration-100 hover:text-[#0077b6] active:text-indigo-700">Read more</a>
                                        </div>
                                    </div>

                                    <div>
                                        <button className='lg:pl-10'><IoIosAddCircleOutline className='text-3xl font-bold hover:text-[#0077b6]' /></button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>


                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default page;