"use client"
import { useEffect, useState } from "react";
import PodcastDetails from "@/Components/Cards/PodcastDetails";
import ReviewForm from "@/Components/Cards/ReviewForm";
import SectionTitle from "@/Components/Heading/SectionTitle";
import ReviewCard from "@/Components/Cards/ReviewCard";
import { FaUserCircle } from "react-icons/fa";



const page = () => {

    const [reviews, setReviews] = useState([]);
    

    useEffect(() =>{
        fetch('singlePodcast.json')
        .then(res => res.json())
        .then(data => setReviews(data.comments));
    },[])

    console.log(reviews);


    return (
        <div>
            <PodcastDetails></PodcastDetails>
            <SectionTitle title={"Leave a review!"}></SectionTitle>
            <ReviewForm></ReviewForm>

            {/* Review Carousel */}
            <div className="flex flex-col mt-4 md:mt-14 lg:mt-16 justify-center items-center mb-16">
                <div className="lg:carousel md:carousel carousel-center w-2/5 p-4 space-x-4 rounded-box hidden bg-[#0077B6] ">
                {/* LARGE DEVICE */}
                    {
                        reviews.map(rev=> <div key={rev.id} className="carousel-item md:w-3/5 lg:w-3/6 rounded-box flex flex-col gap-6 text-center p-20 bg-gradient-to-b from-[#90E0EF] to-[#00B4D8]"> 
                        {/* <FaUserCircle className="text-[#CCC3AA] mx-auto text-5xl"></FaUserCircle> */}
                        <h2 className="md:text-xl lg:text-2xl font-semibold text-[#03045E]">{rev.username}</h2>
                        <p className="text-[#03045E] md:text-base lg:text-xl leading-relaxed"><span className="text-2xl font-bold ">"</span>{rev.comment}<span className="text-2xl font-bold">"</span></p> 
                        </div> )
                        
                    }
                </div>
                {/* SMALL DEVICE */}
                <div className="h-[140px] carousel carousel-vertical rounded-box md:hidden lg:hidden">
                    {
                        reviews.map(rev=> <div key={rev.id} className="carousel-item w-[180px] h-full rounded-box flex flex-col gap-4 text-center align-top p-10 bg-gradient-to-b from-[#90E0EF] to-[#00B4D8]"> 
                        {/* <FaUserCircle className="mx-auto text-5xl text-[#69551c]"></FaUserCircle> */}
                        <h2 className="text-[#03045E] text-sm font-semibold ">{rev.username}</h2>
                        <p className="text-[#03045E] text-xs leading-relaxed"><span className="text-2xl font-bold">"</span>{rev.comment}<span className="text-2xl font-bold">"</span></p> </div> )
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

export default page;