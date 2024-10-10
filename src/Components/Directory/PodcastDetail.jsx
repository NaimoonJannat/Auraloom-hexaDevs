"use client";


import { useEffect, useState, useContext } from "react";
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
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { useRouter } from 'next/router';


const PodcastDetail = ({ id }) => {
    
    const { user } = useContext(AuthContext);
    const [podcast, setPodcast] = useState(null);
    const [reviews, setReviews] = useState([]); 
    const [isLiked, setIsLiked] = useState(false); // New state for tracking like
    const [isDisliked, setIsDisliked] = useState(false);
    

    useEffect(() => {
        if (id) {
            fetch(`https://auraloom-backend.vercel.app/podcasts/${id}`)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch podcast');
                    }
                    return res.json();
                })
                .then((data) => {
                    setPodcast(data);
                    // Parse comments if it's a string
                    const commentsArray = typeof data.comments === 'string' 
                    ? JSON.parse(data.comments) 
                    : data.comments;
                    setReviews(commentsArray);
                    // console.log();
                    
                    // Check if the current user has liked or disliked the podcast
                    if (user) {
                        setIsLiked(data.likes.includes(user.email));
                        setIsDisliked(data.dislikes.includes(user.email));
                    }
                })
                .catch((error) => {
                    console.error('Error fetching podcast:', error);
                });
        }
    }, [id]);

    // Handle the case where podcast is not loaded yet
    if (!podcast) {
        return <div>Loading...</div>;
    }

    // LIKING PODCAST
    const handleLike = async () => {
        // Redirect user to login if no user
        if (!user) {
            router.push({
                pathname: '/login',
                query: { from: router.asPath }
            });
            return; // Stop further execution
        }
    
        // Do not let user like if they are the owner of the podcast
        if (user.email === email) {
            Swal.fire({
                title: 'Failure!',
                text: 'You cannot like your own podcast!',
                icon: 'error',
                confirmButtonText: 'Close'
            });
            return; // Stop further execution
        }
    
        // Do not let user like if they have already liked this podcast
        if (isLiked) {
            Swal.fire({
                title: 'Failure!',
                text: 'You already liked this podcast!',
                icon: 'error',
                confirmButtonText: 'Close'
            });
            return;
        }
    
        // Update likes if the user has not liked this podcast yet
        try {
            const response = await fetch(`https://auraloom-backend.vercel.app/podcasts/like/${podcast._id}?email=${user.email}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                }
            });
    
            const data = await response.json();
    
            if (response.ok) {
                // Update the local state with the new like count
                setPodcast((podcast) => ({
                    ...podcast,
                    likes: [...podcast.likes, user.email] // Add the user's email to the likes array
                }));
                setIsLiked(true);
    
                Swal.fire({
                    title: 'Liked!',
                    text: 'You have successfully liked this podcast!',
                    icon: 'success',
                    confirmButtonText: 'Close'
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: data.message || 'Failed to like the podcast.',
                    icon: 'error',
                    confirmButtonText: 'Close'
                });
            }
        } catch (error) {
            console.error('Error liking podcast:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong!',
                icon: 'error',
                confirmButtonText: 'Close'
            });
        }
    };

    // DISLIKING PODCAST
    const handleDislike = async () => {
        // Redirect user to login if no user
        if (!user) {
            router.push({
                pathname: '/login',
                query: { from: router.asPath }
            });
            return; // Stop further execution
        }
    
        // Do not let user dislike if they are the owner of the podcast
        if (user.email === email) {
            Swal.fire({
                title: 'Failure!',
                text: 'You cannot dislike your own podcast!',
                icon: 'error',
                confirmButtonText: 'Close'
            });
            return; // Stop further execution
        }
    
        // Do not let user dislike if they have already disliked this podcast
        if (isDisliked) {
            Swal.fire({
                title: 'Failure!',
                text: 'You already disliked this podcast!',
                icon: 'error',
                confirmButtonText: 'Close'
            });
            return;
        }
    
        // Update dislikes if the user has not disliked this podcast yet
        try {
            const response = await fetch(`https://auraloom-backend.vercel.app/podcasts/dislike/${podcast._id}?email=${user.email}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                }
            });
    
            const data = await response.json();
    
            if (response.ok) {
                // Update the local state with the new dislike count
                setPodcast((podcast) => ({
                    ...podcast,
                    dislikes: [...podcast.dislikes, user.email] // Add the user's email to the dislikes array
                }));
                setIsDisliked(true);
    
                Swal.fire({
                    title: 'Disliked!',
                    text: 'You have successfully liked this podcast!',
                    icon: 'success',
                    confirmButtonText: 'Close'
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: data.message || 'Failed to dislike the podcast.',
                    icon: 'error',
                    confirmButtonText: 'Close'
                });
            }
        } catch (error) {
            console.error('Error disliking podcast:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong!',
                icon: 'error',
                confirmButtonText: 'Close'
            });
        }
    };
    

    

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
                        <button 
                            onClick={handleLike} 
                            className="flex items-center gap-2 border text-base border-b-slate-300 py-3 font-medium px-7 rounded-badge bg-[#01BECA]"
                        >
                            <FcLike className="text-2xl"/>
                            {isLiked ? "Liked" : "Like"}
                        </button>
                        <button 
                            onClick={handleDislike} 
                            className="flex items-center gap-2 border text-base border-b-slate-300 py-3 font-medium px-7 rounded-badge bg-[#01BECA]"
                        >
                            <FcDislike className="text-2xl"/>
                            {isDisliked ? "Disliked" : "Dislike"}
                        </button>
                            <button className="flex items-center gap-2 border text-base border-b-slate-300 py-3 font-medium px-7 rounded-badge bg-[#01BECA]"><FaPlus className="text-2xl"/>Add to Playlist</button>
                            <button className="flex items-center gap-2 border text-base border-b-slate-300 py-3 font-medium px-7 rounded-badge bg-[#01BECA]"><FaShare className="text-2xl"/>Share</button>
                        </div>                        
                    </div>
                </div>
            
            {/* Review Form */}
            <SectionTitle title={"Leave a review!"}></SectionTitle>
            <ReviewForm></ReviewForm>

            {/* Review Carousel */}
            <div className="flex flex-col mt-4 md:mt-14 lg:mt-16 justify-center items-center mb-16">
                <div className="lg:carousel md:carousel carousel-center w-2/5 p-4 space-x-4 rounded-box hidden bg-[#0077B6] ">
                
                {reviews && reviews.length > 0 ? (
                    reviews.map((rev) => (
                        <div key={rev._id} className="carousel-item md:w-3/5 lg:w-3/6 rounded-box flex flex-col gap-6 text-center p-20 bg-gradient-to-b from-[#90E0EF] to-[#00B4D8]"> 
                            <h2 className="md:text-xl lg:text-2xl font-semibold text-[#03045E]">{rev.username}</h2>
                            <p className="text-[#03045E] md:text-base lg:text-xl leading-relaxed">{rev.review}</p> 
                        </div>
                    ))
                ) : (
                    <p>No reviews available.</p>
                )}
                </div>
                
                <div className="h-[140px] carousel carousel-vertical rounded-box md:hidden lg:hidden">
                {reviews && reviews.length > 0 ? (
                    reviews.map((rev) => (
                        <div key={rev._id} className="carousel-item md:w-3/5 lg:w-3/6 rounded-box flex flex-col gap-6 text-center p-20 bg-gradient-to-b from-[#90E0EF] to-[#00B4D8]"> 
                            <h2 className="md:text-xl lg:text-2xl font-semibold text-[#03045E]">{rev.username}</h2>
                            <p className="text-[#03045E] md:text-base lg:text-xl leading-relaxed">{rev.review}</p> 
                        </div>
                    ))
                ) : (
                    <p>No reviews available.</p>
                )}
                </div>               
            </div>

        </div>
    );
};

export default PodcastDetail;