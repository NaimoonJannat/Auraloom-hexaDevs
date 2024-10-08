"use client"
import { useEffect, useState } from "react";
import PodcastDetails from "@/Components/Cards/PodcastDetails";
import ReviewForm from "@/Components/Cards/ReviewForm";
import SectionTitle from "@/Components/Heading/SectionTitle";
import ReviewCard from "@/Components/Cards/ReviewCard";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import Swal from "sweetalert2";

const PodcastDetail = () => {

    
    const [podcast, setPodcast] = useState({});
    const [reviews, setReviews] = useState([]);
    

    useEffect(() =>{
        fetch(`/singlePodcast.json`)
        .then(res => res.json())
        .then(data => {
            setPodcast(data);
            setReviews(data.comments);
        });
    },[])

    // console.log(podcast);

    return (
        <div>
            {/* <PodcastDetails podcast={podcast}></PodcastDetails> */}
            {/* PODCAST DETAIL CARD */}
            <div className="card bg-[#d4eff4] lg:w-1/2 shadow-xl pt-10 mx-auto mt-10">
                <figure className="w-2/3 rounded-lg mx-auto">
                <Image
                    src={podcast.imgUrl}
                    layout="responsive"   // Make the image responsive
                    width={50}           // Use a relative width, will scale according to container
                    height={50}          // Maintain aspect ratio based on the original image dimensions
                    className="w-full object-cover"  // object-cover ensures the image is not stretched
                    alt="Podcast cover"
                />
                    
                </figure>
                <div className="card-body">
                    <h2 className="card-title flex font-bold lg:text-2xl md:text-xl text-lg">
                    {podcast.title}
                    {/* <div className="badge p-3 bg-[#34D1F1] justify-items-end">{podcast.played} times</div> */}
                    </h2>
                    <p className="lg:text-xl font-semibold md:text-lg text-base">{podcast.creator}</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline p-4  lg:text-xl md:text-lg text-base"><AiOutlineLike  className="text-base mr-1 font-semibold"/> {podcast.likes || 0}</div>
                    <div className="badge badge-outline p-4  lg:text-xl md:text-lg text-base"><AiOutlineDislike  className="text-base mr-1 font-semibold"/> {podcast.dislikes || 0}</div>
                    </div>
                </div>
                </div>
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