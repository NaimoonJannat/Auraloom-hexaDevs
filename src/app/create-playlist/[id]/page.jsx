// app/create-playlist/[id]/page.jsx
'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import AddToPlaylist from '@/Components/AddToPlaylist/AddToPlaylist';
import { CirclesWithBar } from 'react-loader-spinner';

const PlaylistDetail = ({ params }) => {
    const { id } = params; // Access the playlist ID directly from params
    // const [playlist, setPlaylist] = useState(null);

    // useEffect(() => {
    //     const fetchPlaylist = async () => {
    //         if (id) {
    //             try {
    //                 const response = await axios.get(`https://auraloom-backend.vercel.app/playlists/${id}`);
    //                 setPlaylist(response.data);
    //             } catch (error) {
    //                 console.error('Error fetching playlist:', error);
    //             }
    //         }
    //     };
    //     fetchPlaylist();
    // }, [id]);

    // if (!playlist) {
    //     return (
    //         <div className="flex justify-center items-center h-screen">
    //             <CirclesWithBar height={80} width={80} color="#0077b6" />
    //         </div>
    //     );
    // }

    return (
        <div>
            {/* <h1>{playlist.name}</h1>
            <Image
                src={playlist.image || '/default-image.jpg'} // Fallback image path
                alt={playlist.name || 'Playlist Image'}
                width={500}
                height={500}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            /> */}
            {/* <p>Created by: {playlist.userName}</p> */}
            <AddToPlaylist id={id} />
        </div>
    );
};

export default PlaylistDetail;
