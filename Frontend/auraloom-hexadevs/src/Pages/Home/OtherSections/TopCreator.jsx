import { useEffect, useState } from "react";
import CreatorCard from "./CreatorCard";

const TopCreator = () => {
        const [creators, setCreators] = useState([]);
        useEffect( () =>{
            fetch('creatorData.json')
            .then(res => res.json())
            .then(data => setCreators(data));
        } ,[])
    return (
        <div className="w-full">
            <div className="text-center">
            <h1 className="text-4xl text-[#436BE5] font-bold">Top Creators</h1>
            <div className="py-8 text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    creators.map(Creator =>
                        <CreatorCard
                            key={Creator._id}
                            Creator={Creator}
                        />
                    )
                }
            </div>
        </div>
        </div>
    );
};

export default TopCreator;