"use client";


import { useEffect, useState } from "react";
import PodcastDetails from "@/Components/Cards/PodcastDetails";
import ReviewForm from "@/Components/Cards/ReviewForm";
import SectionTitle from "@/Components/Heading/SectionTitle";
import ReviewCard from "@/Components/Cards/ReviewCard";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import Swal from "sweetalert2";
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { FaPlus } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";


const PodcastDetail = ({ id }) => {
    
    const [podcast, setPodcast] = useState(null);

    
    // const [podcast, setPodcast] = useState({});
    const [reviews, setReviews] = useState([]);
    

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5000/podcasts/${id}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch podcast');
                    }
                    return res.json();
                })
                .then((data) => {
                    setPodcast(data);
                    setReviews(data.comments);
                })
                .catch((error) => {
                    console.error('Error fetching podcast:', error);
                });
        }
    }, [id]);

    // Ensure you handle the case where podcast is not loaded yet
    if (!podcast) {
        return <div>Loading...</div>;
    }
    

    // console.log(podcast);

    return (
        <div>
            {/* <PodcastDetails podcast={podcast}></PodcastDetails> */}
            {/* PODCAST DETAIL CARD */}
            <div className="relative rounded-lg overflow-hidden shadow-lg w-full h-full">
                    {/* Background Image */}
                    <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${podcast.imgUrl})` }}
                    >
                        {/* Overlay */}
                        <div className="bg-black bg-opacity-30 h-full w-full"></div>
                    </div>

                    {/* Content Wrapper */}
                    <div className="relative z-10 text-white justify-between h-full p-3 md:p-4 lg:w-1/2 mx-auto my-32">
                        {/* Episode Info */}
                        <div className=" mb-10 flex justify-between items-center">
                            <span className="bg-[#01BECA] px-2  items-center border border-transparent rounded-badge w-fit">{podcast.category}</span>
                            <div className="flex gap-10 text-lg font-medium">
                                <span className="flex items-center gap-2"> <FcLike className="text-3xl" /> {podcast && podcast.likes ? podcast.likes.length : 0} Likes</span>
                                <span className="flex items-center gap-2"> <FcDislike className="text-3xl" />{podcast && podcast.dislikes ? podcast.dislikes.length : 0} Dislikes</span>
                            </div>
                        </div>
                        <div className="lg:text-6xl  font-bold mb-10">{podcast.title}</div>
                        <div className="text-xl font-medium mb-12">{podcast.creator}</div>
                        <div className="flex gap-4 items-center">
                            <button className="flex items-center gap-2 border text-base border-b-slate-300 py-3 font-medium px-7 rounded-badge bg-[#01BECA]"><FcLike className="text-2xl"/>Like</button>
                            <button className="flex items-center gap-2 border text-base border-b-slate-300 py-3 font-medium px-7 rounded-badge bg-[#01BECA]"><FcDislike className="text-2xl"/>Dislike</button>
                            <button className="flex items-center gap-2 border text-base border-b-slate-300 py-3 font-medium px-7 rounded-badge bg-[#01BECA]"><FaPlus className="text-2xl"/>Add to Playlist</button>
                            <button className="flex items-center gap-2 border text-base border-b-slate-300 py-3 font-medium px-7 rounded-badge bg-[#01BECA]"><FaShare className="text-2xl"/>Share</button>
                        </div>
                        

                        {/* Podcast Title */}
                        
                    </div>
                </div>
            
            {/* Review Form */}
            <SectionTitle title={"Leave a review!"}></SectionTitle>
            <ReviewForm></ReviewForm>

            {/* Review Carousel */}
            <div className="flex flex-col mt-4 md:mt-14 lg:mt-16 justify-center items-center mb-16">
                <div className="lg:carousel md:carousel carousel-center w-2/5 p-4 space-x-4 rounded-box hidden bg-[#0077B6] ">
                
                    {
                        reviews.map(rev=> <div key={rev.id} className="carousel-item md:w-3/5 lg:w-3/6 rounded-box flex flex-col gap-6 text-center p-20 bg-gradient-to-b from-[#90E0EF] to-[#00B4D8]"> 
                        
                        <h2 className="md:text-xl lg:text-2xl font-semibold text-[#03045E]">{rev.username}</h2>
                        <p className="text-[#03045E] md:text-base lg:text-xl leading-relaxed"><span className="text-2xl font-bold "></span>{rev.comment}<span className="text-2xl font-bold"></span></p> 
                        </div> )
                        
                    }
                </div>
                
                <div className="h-[140px] carousel carousel-vertical rounded-box md:hidden lg:hidden">
                    {
                        reviews.map(rev=> <div key={rev.id} className="carousel-item w-[180px] h-full rounded-box flex flex-col gap-4 text-center align-top p-10 bg-gradient-to-b from-[#90E0EF] to-[#00B4D8]"> 
                        
                        <h2 className="text-[#03045E] text-sm font-semibold ">{rev.username}</h2>
                        <p className="text-[#03045E] text-xs leading-relaxed"><span className="text-2xl font-bold"></span>{rev.comment}<span className="text-2xl font-bold"></span></p> </div> )
                    }
                </div>               
            </div>

            {/* <div className="mt-10 flex items-center gap-6">
                {reviews.map(review=> <ReviewCard 
                    key={review.id} 
                    review={review}>
                </ReviewCard>)}
            </div> */}
        </div>
    );
};

export default PodcastDetail;