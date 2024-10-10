
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaPlay } from "react-icons/fa6";
import { notFound } from "next/navigation";
import PodcastDetail from "@/Components/Directory/PodcastDetail";


const page = ({params}) => {
    

    const { id } = params;

    // FOR DYNAMIC ROUTING FROM DB
        // Fetch the podcast details from the deployed API using the ID
        // const response = await fetch(`https://auraloom-backend.vercel.app/podcasts/${id}`, {
        //     method: 'GET', // Using GET method to fetch data
        //     headers: {
        //     'Content-Type': 'application/json',
        //     },
        // });
        
        // Check if the response is okay (status code 200)
        // if (!response.ok) {
        //     return <div>Error fetching podcast details.</div>; // Handle error case
        // }

        // const podcast = await response.json();
        // console.log(podcast);

        // if (!podcast) return <div>Loading...</div>;


    return (
        <div>
            <PodcastDetail id={id}></PodcastDetail>
        </div>
    );
};

export default page;