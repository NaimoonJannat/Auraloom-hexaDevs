
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaPlay } from "react-icons/fa6";
import { notFound } from "next/navigation";
import PodcastDetail from "@/Components/Directory/PodcastDetail";


const page = ({ params }) => {

    const { id } = params;

    return (
        <div>
            <PodcastDetail id={id}></PodcastDetail>
        </div>
    );
};

export default page;