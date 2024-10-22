import PodcastDirectory from "@/Components/Directory/PodcastDirectory";
import { Suspense } from "react";


const page = () => {



    return (
        <div>
            <Suspense fallback={<div>Loading podcasts...</div>}>
                <PodcastDirectory />
            </Suspense>
        </div>
    );
};

export default page;