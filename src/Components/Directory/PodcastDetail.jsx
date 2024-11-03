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
import { useForm } from 'react-hook-form';
import AudioPlayer from "./AudioPlayer";
import { CirclesWithBar } from "react-loader-spinner";
import reviewGraphic from "/public/reviews_graphic.svg";

const PodcastDetail = ({ id }) => {

    const { user } = useContext(AuthContext);
    const [podcast, setPodcast] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [isLiked, setIsLiked] = useState(false); // New state for tracking like
    const [isDisliked, setIsDisliked] = useState(false);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
    });


    useEffect(() => {
        setIsLoading(true);
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
                    setIsLoading(false);
                })
                .catch((error) => {
                    setIsLoading(false);
                    console.error('Error fetching podcast:', error);
                });
        }
    }, [id]);

    // Initial effect to set the like and dislike states based on the user's email
    useEffect(() => {
        if (podcast && user) {
            setIsLiked(podcast.likes.includes(user.email));
            setIsDisliked(podcast.dislikes.includes(user.email));
        }
    }, [podcast, user]);

    // If the data is still loading, show a loading message
    if (isLoading) {
        return (
            <div className="min-h-screen ">
                <div className="lg:flex justify-center items-center lg:mt-80 mx-auto hidden ">
                    <CirclesWithBar
                        height="120"
                        width="120"
                        color="#4F46E5"
                        outerCircleColor="#4F46E5"
                        innerCircleColor="#4F46E5"
                        barColor="#4F46E5"
                        ariaLabel="circles-with-bar-loading"
                        visible={true}

                    />
                </div>
                <div className="md:flex justify-center items-center md:mt-72 mx-auto hidden lg:hidden">
                    <CirclesWithBar
                        height="100"
                        width="100"
                        color="#4F46E5"
                        outerCircleColor="#4F46E5"
                        innerCircleColor="#4F46E5"
                        barColor="#4F46E5"
                        ariaLabel="circles-with-bar-loading"
                        visible={true}

                    />
                </div>
                <div className="md:hidden flex justify-center items-center mt-40 mx-auto ">
                    <CirclesWithBar
                        height="80"
                        width="80"
                        color="#4F46E5"
                        outerCircleColor="#4F46E5"
                        innerCircleColor="#4F46E5"
                        barColor="#4F46E5"
                        ariaLabel="circles-with-bar-loading"
                        visible={true}

                    />
                </div>
            </div>
        )
    }



    // LIKING PODCAST
    const handleLike = async () => {
        if (!user) {
            router.push({
                pathname: '/login',
                query: { from: router.asPath }
            });
            return;
        }

        if (user.email === podcast.creatorEmail) {
            Swal.fire({
                title: 'Failure!',
                text: 'You cannot like your own podcast!',
                icon: 'error',
                confirmButtonText: 'Close',
                confirmButtonColor: '#01BECA',
                color: '#0077B6',
                background: '#1D232A',
            });
            return;
        }

        try {
            const response = await fetch(`https://auraloom-backend.vercel.app/podcasts/like/${podcast._id}?email=${user.email}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to like the podcast.');
            }

            const updatedPodcast = await response.json();
            setPodcast(updatedPodcast);

            // Update state based on the updated podcast data
            setIsLiked(updatedPodcast.likes.includes(user.email));
            setIsDisliked(updatedPodcast.dislikes.includes(user.email));

        } catch (error) {
            console.error('Error liking podcast:', error);
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Close',
                confirmButtonColor: '#01BECA',
                color: '#0077B6',
                background: '#1D232A',
            });
        }
    };

    // DISLIKING PODCAST
    const handleDislike = async () => {
        if (!user) {
            router.push({
                pathname: '/login',
                query: { from: router.asPath }
            });
            return;
        }

        if (user.email === podcast.creatorEmail) {
            Swal.fire({
                title: 'Failure!',
                text: 'You cannot dislike your own podcast!',
                icon: 'error',
                confirmButtonText: 'Close',
                confirmButtonColor: '#01BECA',
                color: '#0077B6',
                background: '#1D232A',
            });
            return;
        }

        try {
            const response = await fetch(`https://auraloom-backend.vercel.app/podcasts/dislike/${podcast._id}?email=${user.email}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to dislike the podcast.');
            }

            const updatedPodcast = await response.json();
            setPodcast(updatedPodcast);

            // Update state based on the updated podcast data
            setIsLiked(updatedPodcast.likes.includes(user.email));
            setIsDisliked(updatedPodcast.dislikes.includes(user.email));

        } catch (error) {
            console.error('Error disliking podcast:', error);
            Swal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'Close',
                confirmButtonColor: '#01BECA',
                color: '#0077B6',
                background: '#1D232A',
            });
        }
    };




    // ADD REVIEW
    const onSubmit = async (data) => {
        const review = {
            username: data.name,
            email: data.email,
            review: data.message,
        };

        try {
            const response = await fetch(`https://auraloom-backend.vercel.app/podcasts/${id}/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(review),
            });

            if (!response.ok) {
                throw new Error('Failed to submit review');
            }

            Swal.fire({
                title: 'Success!',
                text: 'Your review was submitted successfully!',
                icon: 'success',
                confirmButtonText: 'Close',
            });
            setReviews((reviews) => [...reviews, review]);
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'There was a problem submitting your review, please try again!',
                icon: 'error',
                confirmButtonText: 'Close',
            });
        }
    };
    //     // Function to handle sharing a podcast
    const handleSharePodcast = (podcastTitle) => {
        if (navigator.share) {
            navigator.share({
                title: `Check out this podcast: ${podcastTitle}`,
                text: `I found this interesting podcast titled "${podcastTitle}". Listen to it now!`,
                url: window.location.href,
            })
                .then(() => setMessage('Podcast shared successfully!'))
                .catch((error) => setMessage(`Error sharing podcast: ${error.message}`));
        } else {
            setMessage('Sharing is not supported on this device.');
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
                    <div className=" mb-10 lg:flex space-y-4 justify-between items-center">
                        <span className="bg-[#01BECA] px-2  items-center border border-transparent rounded-badge w-fit text-sm">{podcast.category}</span>
                        <div className="flex gap-10 text-lg font-medium">
                            <span className="flex items-center gap-2 text-sm md:text-base"> <FcLike className="text-2xl lg:text-3xl" /> {podcast && podcast.likes ? podcast.likes.length : 0} Likes</span>
                            <span className="flex items-center gap-2 text-sm md:text-base"> <FcDislike className="text-2xl lg:text-3xl" />{podcast && podcast.dislikes ? podcast.dislikes.length : 0} Dislikes</span>
                        </div>
                    </div>
                    <div className="lg:text-3xl text-lg  font-bold mb-5 lg:mb-10">{podcast.title}</div>
                    <div className="lg:text-xl font-medium mb-6 lg:mb-12">{podcast.creator}</div>

                    {/* playback control  */}
                    <AudioPlayer
                        audioUrl={podcast.audioUrl}
                        user={user}
                        podcastId={podcast._id} />

                    <div className="flex gap-4 items-center flex-wrap lg:mt-10 justify-center mt-4 md:mt-6">
                        <button
                            onClick={handleLike}
                            className="flex items-center gap-2 border text-sm md:text-base border-b-slate-300 py-1 md:py-2 lg:py-3 font-medium px-5 md:px-6 lg:px-7 rounded-badge bg-[#01BECA]"
                        >
                            <FcLike className="text-2xl" />
                            {isLiked ? "Liked" : "Like"}
                        </button>
                        <button
                            onClick={handleDislike}
                            className="flex items-center gap-2 border text-sm md:text-base border-b-slate-300 py-1 md:py-2 lg:py-3 font-medium px-5 md:px-6 lg:px-7 rounded-badge bg-[#01BECA]"
                        >
                            <FcDislike className="text-2xl" />
                            {isDisliked ? "Disliked" : "Dislike"}
                        </button>
                        {/* <button className="flex items-center gap-2 border text-sm md:text-base border-b-slate-300 py-1 md:py-2 lg:py-3 font-medium px-5 md:px-6 lg:px-7 rounded-badge bg-[#01BECA]"><FaPlus className="text-2xl" />Add to Playlist</button> */}
                        <button
                            onClick={() => handleSharePodcast('Inspiring Podcast')}
                            className="flex items-center gap-2 border text-sm md:text-base border-b-slate-300 py-1 md:py-2 lg:py-3 font-medium px-5 md:px-6 lg:px-7 rounded-badge bg-[#01BECA]"
                        >
                            <FaShare className="text-2xl" />
                            Share
                        </button>

                    </div>
                </div>
            </div>

            {/* Review Form */}
            <SectionTitle title={"Leave a review!"}></SectionTitle>
            <div className="flex flex-col md:flex-row gap-0 md:gap-4 items-center justify-center">
                <div className="w-full md:w-[45%] flex justify-end">
                    <ReviewForm onSubmit={onSubmit}></ReviewForm>
                </div>
                <div className="w-full md:w-auto flex justify-start">
                    <Image
                        width={350}
                        height={350}
                        src={reviewGraphic}
                        alt="Review Graphic"
                        className="object-contain max-h-[500px] md:max-h-[600px]"
                    />
                </div>
            </div>
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