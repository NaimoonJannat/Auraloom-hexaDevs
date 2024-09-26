"use client"
import { useEffect, useState } from "react";

const PodcastDetails = () => {

    const [podcast, setPodcast] = useState({});

    useEffect(() =>{
        fetch('singlePodcast.json')
        .then(res => res.json())
        .then(data => setPodcast(data));
    },[])

    // console.log(podcast);

    return (
        <div className="bg-[#CAF0F8] p-6 lg:p-10 md:w-2/3 lg:w-1/2 mx-auto rounded-xl md:mb-10 lg:mb-16">
            <div className="flex flex-row gap-3 md:gap-6 lg:gap-10 mb-3 md:mb-6 lg:mb-10">
                <img className="h-20 w-20 md:h-32 md:w-32 lg:h-44 lg:w-44 rounded-lg" src={podcast.cover} alt="" />
                <div>
                    <div className="flex gap-1 md:gap-2 lg:gap-3 items-center mt-2">
                        <img className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" src="/play.png" alt="" />
                        <img className="h-6 w-3/4 md:h-6 md:w-10/12 lg:w-full lg:h-full" src="/soundwave.png" alt="" />
                    </div>
                    <div className="flex md:gap-1 lg:gap-2 mt-2 md:mt-3 lg:mt-4">
                        <img className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7" src="/rewind_icon.png" alt="" />
                        <img className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7" src="/forward_icon.png" alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 md:gap-3 lg:gap-5 mt-2  lg:pl-14">
                    <img className="w-9/12 md:w-3/4 lg:w-full"  src="/like_icon.png" alt="" />
                    <img className="w-3/5 md:w-3/5 lg:w-11/12" src="/dislike_icon.png" alt="" />
                    <img className="w-3/5 md:w-3/5 lg:w-11/12" src="/share_icon.png" alt="" />
                </div>
            </div>
            <div>
                <h2 className="text-base md:text-xl lg:text-3xl font-semibold text-[#0077B6]">{podcast.title}</h2>
                <p className="text-sm md:text-lg lg:text-2xl mb-2 md:mb-5 font-medium mt-1 md:mt-2 text-[#00B4D8]">{podcast.artist}</p>
                <p className="text-xs md:text-base lg:text-xl font-normal text-[#00B4D8]">{podcast.description}</p>
            </div>
            <div className="text-[#00B4D8] text-[11px] md:text-sm lg:text-xl flex justify-around mt-3 md:mt-6 lg:mt-10">
                <div className="flex gap-1 md:gap-3 items-center">
                    <img className="w-4 h-4 md:w-6 md:h-6" src="/play.png" alt="" />
                    <p><span className="font-semibold ">{podcast.plays}</span> times</p>
                </div>
                <div className="flex gap-1 md:gap-3 items-center">
                    <img className="w-4 h-4 md:w-6 md:h-6 mt-1" src="/like_icon.png" alt="" />
                    <p><span className="font-semibold">{podcast.upvotes}</span> times</p>
                </div>
                <div className="flex gap-1 md:gap-3 items-center justify-center">
                    <img className="w-4 h-4 md:w-6 md:h-6 mt-1 md:mt-2" src="/dislike_icon.png" alt="" />
                    <p><span className="font-semibold">{podcast.downvotes}</span> times</p>
                </div>
            </div>
        </div>
    );
};

export default PodcastDetails;