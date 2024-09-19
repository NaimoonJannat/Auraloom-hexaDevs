import React from 'react';
import { FaPodcast } from 'react-icons/fa';

const CreatorCard = ({ Creator }) => {
    const { name, profilePicture, bio, followers, totalPodcasts, badge, socialLinks } = Creator;

    return (
        <div className="card w-96 p-2 bg-gradient-to-r from-[#161D6F] to-[#0B2F9F] shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <figure className="w-full h-56 overflow-hidden">
                <img
                    src={profilePicture}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body text-[#C7FFD8] p-6 space-y-2">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-sm text-[#98DED9]">{bio}</p>
               <div className='flex '>
               <p className="text-sm">Followers: <span className="font-semibold">{followers}</span></p>
               <div className='flex justify-around'>
               <FaPodcast />
               <p className="text-sm font-semibold">{totalPodcasts}</p>
               </div>
               </div>
               
                <div className="badge badge-accent badge-outline font-semibold">{badge}</div>
            </div>
        </div>
    );
};

export default CreatorCard;
