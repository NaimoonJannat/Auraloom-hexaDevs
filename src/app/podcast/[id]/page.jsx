
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
        // const response = await fetch(`http://localhost:5000/podcasts/${id}`, {
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
        // <div>
        //     <div className="card bg-[#d4eff4] lg:w-1/2 shadow-xl pt-3 mx-auto mt-10">
        //         <figure className="w-2/3 rounded-lg mx-auto">
        //         <Image
        //             src={podcast.imgUrl}
        //             layout="responsive"   // Make the image responsive
        //             width={50}           // Use a relative width, will scale according to container
        //             height={50}          // Maintain aspect ratio based on the original image dimensions
        //             className="w-full object-cover"  // object-cover ensures the image is not stretched
        //             alt="Podcast cover"
        //         />
                    
        //         </figure>
        //         <div className="card-body">
        //             <h2 className="card-title flex font-bold lg:text-2xl md:text-xl text-lg">
        //             {podcast.title}
        //             {/* <div className="badge p-3 bg-[#34D1F1] justify-items-end">{podcast.played} times</div> */}
        //             </h2>
        //             <p className="lg:text-xl font-semibold md:text-lg text-base">{podcast.creator}</p>
        //             <div className="card-actions justify-end">
        //             <div className="badge badge-outline p-3  lg:text-lg md:text-base text-sm"><AiOutlineLike  className="text-base mr-1"/> {podcast.likes.length}</div>
        //             <div className="badge badge-outline p-3  lg:text-lg md:text-base text-sm"><AiOutlineDislike  className="text-base mr-1"/> {podcast.dislikes.length}</div>
        //             </div>
        //         </div>
        //         </div>
        // </div>
    );
};

export default page;