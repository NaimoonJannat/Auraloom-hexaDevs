"use client"
import Lottie from 'lottie-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFileWaveform } from 'react-icons/fa6'
import animation from "../../../public/json/animation.json";

const AuraloomAi = () => {
    return (
        <section className="bg-white py-16 px-5 sm:px-10 lg:px-32 text-center">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
                Elevate your podcast with AuraPod AI
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto mb-5">
                Elevate your podcast to new heights with AuraloomAi is cutting-edge features such as Noise Reduction,
                Intelligent Leveler, Cut Filler Words, Filtering & AutoEQ, Automated Titles, AI Transcripts,
                and more.
            </p>
            <Link href={"/generate-thumbnail"} className=" text-orange-500">Learn More About AuraPod AI→</Link>
            {/* main content */}
            <div className="flex flex-col mt-6 lg:flex-row items-center justify-center lg:space-x-10">
                {/* textual description and buttons */}
                <div className="flex-1 mb-10 lg:mb-0">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                        <h3 className="font-bold text-lg text-gray-700 mb-2">Episode Description</h3>
                        <p className="text-gray-600 mb-4">
                            Embracing AI tools for streamlined results in post-production tasks.
                        </p>
                        <div className="flex justify-between">
                            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">Save as Draft</button>
                            <button className="bg-sky-500 text-white px-4 py-2 rounded">Publish Now</button>
                        </div>
                    </div>
                </div>

                {/* robot image */}
                {/* <div className="relative flex-1 max-w-xs mx-auto">
                    <Image
                        src="https://i.ibb.co/5sGQxX3/home-ai-bg-2x-resize-1x.webp"
                        alt="AI Robot"
                        width={800}
                        height={600}
                        layout="responsive"
                    />
                </div> */}
                <div
                    data-aos="zoom-in"
                    data-aos-delay="700"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="500"
                    className="relative flex-1 max-w-xs mx-auto"
                >
                    <Lottie animationData={animation} />
                </div>

                {/* File preference options */}
                <div className="flex-1 bg-green-100 p-6 rounded-lg shadow-lg">
                    <h3 className="font-bold text-lg text-gray-700 mb-2">Preview and Select Your Preferred File</h3>
                    <div className="space-y-3">
                        <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                            <span className="text-sky-500 font-bold">AI Optimized</span>
                            <span className="text-black"><FaFileWaveform className='bg-none text-2xl'></FaFileWaveform></span>
                        </div>
                        <div className="bg-white p-4 rounded-lg flex justify-between items-center">
                            <span className="text-gray-500 font-bold">Original</span>
                            <span className="text-gray-500"><FaFileWaveform className='bg-none text-2xl'></FaFileWaveform></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AuraloomAi
