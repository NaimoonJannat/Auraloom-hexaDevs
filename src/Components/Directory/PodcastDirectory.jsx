"use client";

import SectionTitle from "@/Components/Heading/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const PodcastDirectory = () => {
    
    const [podcasts, setPodcasts] = useState([]);
    const [techPodcasts, setTechPodcasts] = useState([]);
    const [lifestylePodcasts, setLifestylePodcasts] = useState([]);
    const [entertainmentPodcasts, setEntertainmentPodcasts] = useState([]);
    const [foodPodcasts, setFoodPodcasts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // console.log("Fetching data...");
                const response = await fetch('http://localhost:5000/podcasts'); // Adjust the path if needed

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await response.json();
                // console.log("Data fetched:", data);  // Debug: Log the fetched data to ensure it's coming through

                setPodcasts(data);



                // Filter podcasts by category and store in separate arrays
                // const tech = data.filter(podcast => podcast.category === 'Technology');
                // const lifestyle = data.filter(podcast => podcast.category === 'Life');
                // const entertainment = data.filter(podcast => podcast.category === 'Entertainment');
                // const food = data.filter(podcast => podcast.category === 'Food');

                // console.log("Technology:", tech);  
                // console.log("Lifestyle:", lifestyle);  
                // console.log("Entertainment:", entertainment); 
                // console.log("Food:", food);  

                // setTechPodcasts(tech);
                // setLifestylePodcasts(lifestyle);
                // setEntertainmentPodcasts(entertainment);
                // setFoodPodcasts(food);

                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    // If the data is still loading, show a loading message
    if (isLoading) {
        return <div>Loading...</div>;
    }

    // If there are no podcasts available, display a message
    if (!podcasts.length) {
        return <div>No podcasts available at the moment.</div>;
    }


    return (
        <div>
            
            <div>
      
    {/* Technology Category */}
    {/* <SectionTitle title={"Technology"}></SectionTitle>
      <div className="flex flex-col mt-4 md:mt-14 lg:mt-16 justify-center items-center mb-16">
            <div className="lg:carousel md:carousel carousel-center lg:w-10/12 p-4 space-x-4 rounded-box bg-transparent">
                {techPodcasts.length ? (
                    techPodcasts.map(rev => (
                        <div key={rev.id} className="carousel-item md:w-3/5 lg:w-1/6 rounded-box flex flex-col gap-6 text-center p-16 bg-gradient-to-b from-[#90E0EF] to-[#00B4D8]">
                            <h2 className="md:text-xl lg:text-2xl font-semibold text-[#03045E]">{rev.title}</h2>
                            <p className="text-[#03045E] md:text-base lg:text-xl leading-relaxed">
                                <span className="text-2xl font-bold"></span>{rev.artist}<span className="text-2xl font-bold"></span>
                            </p>
                        </div>
                    ))
                ) : (
                    <div>No podcasts in the Technology category.</div>
                )}
            </div>
        </div> */}

      {/* Lifestyle Category */}
      {/* <SectionTitle title={"Lifestyle"}></SectionTitle>
      <div className="flex flex-col mt-4 md:mt-14 lg:mt-16 justify-center items-center mb-16">
            <div className="lg:carousel md:carousel carousel-center lg:w-10/12 p-4 space-x-4 rounded-box bg-transparent">
                    {lifestylePodcasts.length ? (
                        lifestylePodcasts.map(rev => (
                            <div key={rev.id} className="carousel-item md:w-3/5 lg:w-1/6 rounded-box flex flex-col gap-6 text-center p-16 bg-gradient-to-b from-[#90E0EF] to-[#00B4D8]">
                                <h2 className="md:text-xl lg:text-2xl font-semibold text-[#03045E]">{rev.title}</h2>
                                <p className="text-[#03045E] md:text-base lg:text-xl leading-relaxed">
                                    <span className="text-2xl font-bold"></span>{rev.artist}<span className="text-2xl font-bold"></span>
                                </p>
                            </div>
                        ))
                    ) : (
                        <div>No podcasts in the Lifestyle category.</div>
                    )}
                </div>
            </div> */}

      {/* Entertainment Category */}
      {/* <SectionTitle title={"Entertainment"}></SectionTitle>
      <div className="flex flex-col mt-4 md:mt-14 lg:mt-16 justify-center items-center mb-16">
            <div className="lg:carousel md:carousel carousel-center lg:w-10/12 p-4 space-x-4 rounded-box bg-transparent">
                    {entertainmentPodcasts.length ? (
                        entertainmentPodcasts.map(rev => (
                            <div key={rev.id} className="carousel-item md:w-3/5 lg:w-1/6 rounded-box flex flex-col gap-6 text-center p-16 bg-gradient-to-b from-[#90E0EF] to-[#00B4D8]">
                                <h2 className="md:text-xl lg:text-2xl font-semibold text-[#03045E]">{rev.title}</h2>
                                <p className="text-[#03045E] md:text-base lg:text-xl leading-relaxed">
                                    <span className="text-2xl font-bold"></span>{rev.artist}<span className="text-2xl font-bold"></span>
                                </p>
                            </div>
                        ))
                    ) : (
                        <div>No podcasts in the Entertainment category.</div>
                    )}
                </div>
            </div> */}

      {/* Food Category */}
      {/* <SectionTitle title={"Food"}></SectionTitle>
      <div className="flex flex-col mt-4 md:mt-14 lg:mt-16 justify-center items-center mb-16">
            <div className="lg:carousel md:carousel carousel-center lg:w-10/12 p-4 space-x-4 rounded-box bg-transparent">
                    {foodPodcasts.length ? (
                        foodPodcasts.map(rev => (
                            <div key={rev.id} className="carousel-item md:w-3/5 lg:w-1/6 rounded-box flex flex-col gap-6 text-center p-16 bg-gradient-to-b from-[#90E0EF] to-[#00B4D8]">
                                <h2 className="md:text-xl lg:text-2xl font-semibold text-[#03045E]">{rev.title}</h2>
                                <p className="text-[#03045E] md:text-base lg:text-xl leading-relaxed">
                                    <span className="text-2xl font-bold"></span>{rev.artist}<span className="text-2xl font-bold"></span>
                                </p>
                            </div>
                        ))
                    ) : (
                        <div>No podcasts in the Food category.</div>
                    )}
                </div>
            </div> */}


        <SectionTitle title={"Podcast Directory"}></SectionTitle>
        <label className="input input-bordered flex w-fit mx-auto  items-center gap-2">
                    <input type="text" className="w-fit" placeholder="Search" />
                    <IoIosSearch />
                </label>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-16 px-10">
        {
            podcasts.map(podcast => (
                <Link key={podcast._id}  href={`/podcast/${podcast._id}`}>
                <div className="lg:px-8 lg:py-8 bg-[#CAF0F8] text-lg rounded-xl shadow-xl">
                <figure>
                    <Image
                    className="mx-auto w-full rounded-xl"
                    src={podcast.imgUrl}
                    alt="Podcast cover"
                    width={600}  // Specify an appropriate width based on your design
                    height={400} // Specify an appropriate height based on the aspect ratio
                    />
                </figure>
                <div className="card-body">
                    <h2 className="font-bold text-lg lg:text-xl text-center mb-3">{podcast.title}</h2>
                    <p className="text-base md:text-lg lg:text-xl">
                    <span className="font-bold">Artist:</span> {podcast.creator}
                    </p>
                    <p className="text-base md:text-lg lg:text-xl">
                    <span className="font-bold">Played:</span> {podcast.plays}
                    </p>
                    {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
                </div>
                </Link>
            ))
        }           

        </div>

    </div>
        </div>
    );
};

export default PodcastDirectory;