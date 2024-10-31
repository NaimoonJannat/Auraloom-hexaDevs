// app/create-playlist/[id]/page.jsx
'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import AddToPlaylist from '@/Components/AddToPlaylist/AddToPlaylist';
import { CirclesWithBar } from 'react-loader-spinner';

const PlaylistDetail = ({ params }) => {
    const { id } = params;

    return (
        <div>
            <AddToPlaylist id={id} />
        </div>
    );
};

export default PlaylistDetail;
