"use client"
import React from 'react';
import SectionTitle from '../Heading/SectionTitle';

const GenerateThumbnail = () => {
    return (
        <div>
            {/* <h1>generate-thumbnail</h1> */}
            <div className="container h-96">
                <SectionTitle title={"Generate Thumbnail"}></SectionTitle>
                <div className="flex flex-wrap mt-10 justify-center gap-2">
                    <input
                        type="text"
                        placeholder="what kind of painting do you need"
                        className="input input-bordered w-8/12" />
                    <button className="btn btn-primary ">Generate</button>
                </div>
            </div>
        </div>
    );
};

export default GenerateThumbnail;