import AddToPlaylist from '@/Components/AddToPlaylist/AddToPlaylist';
import React from 'react';

const page = ({ params }) => {

    console.log(params)
    const { id } = params;

    return (
        <div>
            {/* <h2>Add To Playlist</h2> */}
            <AddToPlaylist id={id}></AddToPlaylist>
        </div>
    );
};

export default page;