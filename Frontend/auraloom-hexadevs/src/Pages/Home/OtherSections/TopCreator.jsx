import { useEffect, useState } from "react";
import CreatorCard from "./CreatorCard";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

// Define the keyframe animation for flying in
const flyInAnimation = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const TopCreator = () => {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        fetch('creatorData.json')
            .then(res => res.json())
            .then(data => setCreators(data));
    }, []);

    return (
        <div className="w-full">
            <div className="text-center">
                <h1 className="text-4xl text-[#436BE5] font-bold">Top Creators</h1>
                <div className="py-8 text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        creators.map((Creator, index) =>
                            <Reveal keyframes={flyInAnimation} triggerOnce delay={index * 200} duration={1000} key={Creator._id}>
                                <CreatorCard Creator={Creator} />
                            </Reveal>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TopCreator;
