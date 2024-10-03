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
            {/* <SectionTitle title={"Leave a review!"}></SectionTitle> */}
            {/* <ReviewForm></ReviewForm> */}

            {/* Review Carousel */}
            

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