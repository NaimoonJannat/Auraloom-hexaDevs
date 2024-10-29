// app/create-playlist/[id]/page.jsx
'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import AddToPlaylist from '@/Components/AddToPlaylist/AddToPlaylist';

const PlaylistDetail = ({ params }) => {
    const { id, name, image } = params; // Access ID directly from params in the App Router
    const [playlist, setPlaylist] = useState(null);
    console.log(params)

    useEffect(() => {
        const fetchPlaylist = async () => {
            if (id) {
                try {
                    const response = await axios.get(`https://auraloom-backend.vercel.app/playlists/${id}`);
                    setPlaylist(response.data);
                } catch (error) {
                    console.error('Error fetching playlist:', error);
                }
            }
        };
        fetchPlaylist();
    }, [id]);

    if (!playlist) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* <h1>{name}</h1>
            <Image
                src={playlist.image || '/default-image.jpg'} // Provide a fallback image path
                alt={playlist.name || 'Playlist Image'}
                width={500}
                height={500}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            /> */}
            <AddToPlaylist />
        </div>
    );
};

export default PlaylistDetail;
