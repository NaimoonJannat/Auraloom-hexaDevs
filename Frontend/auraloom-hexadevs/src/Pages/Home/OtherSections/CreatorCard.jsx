import React from 'react';
import { FaPodcast } from 'react-icons/fa';
import { Slide } from "react-awesome-reveal";

const CreatorCard = ({ Creator }) => {
    const { name, profilePicture, bio, followers, totalPodcasts, badge } = Creator;

    return (
        <Slide direction="up" triggerOnce>
            <div className="card w-96 p-2 bg-gradient-to-r from-[#5287BC] to-[#75B3CB] shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                <figure className="w-full h-56 overflow-hidden">
                    <img
                        src={profilePicture}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </figure>
                <div className="card-body text-[#161D6F] p-6 space-y-2">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="text-sm text-white">{bio}</p>
                    <div className='flex justify-between'>
                        <p className="text-sm">Followers: <span className="font-semibold">{followers}</span></p>
                        <div className='flex items-center'>
                            <FaPodcast className="mr-1" />
                            <p className="text-sm font-semibold">{totalPodcasts}</p>
                        </div>
                    </div>
                    <div className="badge badge-accent badge-outline font-semibold">{badge}</div>
                </div>
            </div>
        </Slide>
    );
};

export default CreatorCard;
