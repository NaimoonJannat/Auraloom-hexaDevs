// app/create-playlist/[id]/page.jsx
'use client'
import AddToPlaylist from '@/Components/AddToPlaylist/AddToPlaylist';

const PlaylistDetail = ({ params }) => {
    const { id } = params;

    return (
        <div>
            <AddToPlaylist id={id} />
        </div>
    );
};

export default PlaylistDetail;
