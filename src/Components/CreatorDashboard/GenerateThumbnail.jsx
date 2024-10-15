"use client"
import React, { useState } from 'react';
import SectionTitle from '../Heading/SectionTitle';
import Image from 'next/image';

const GenerateThumbnail = () => {
    const [images, setImages] = useState([])
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.prompt.value);
        const form = new FormData()
        form.append('prompt', event.target.prompt.value)
        fetch('https://clipdrop-api.co/text-to-image/v1', {
            method: 'POST',
            headers: {
                'x-api-key': "93a58eccba48365e330fffe0e398266ccb9bac4699f9f20cc0dba1d6cc3ad2e136c8508b746e7bbefc96195fac639712",
            },
            body: form,
        })
            .then(response => response.arrayBuffer())
            .then(buffer => {
                console.log(buffer);
                const blob = new Blob([buffer], { type: "image/jpeg" });
                const image_url = URL.createObjectURL(blob);
                setImages([image_url, ...images])

            })
    }
    return (
        <div>
            {/* <h1>generate-thumbnail</h1> */}
            <div className="container h-auto">
                <SectionTitle title={"Generate Thumbnail"}></SectionTitle>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap mt-10 justify-center gap-2">
                        <input
                            type="text"
                            name="prompt"
                            placeholder="what kind of painting do you need"
                            className="input input-bordered w-11/12" />
                        <button type="submit" className="btn btn-primary ">Generate</button>
                    </div>
                </form>
                <div className="grid lg:grid-cols-2 gap-5 mt-6">
                    {images.map((image, index) => (
                        <div key={index}>
                            <Image width={400}
                                height={400}
                                src={image}
                                className="border-8 p-5 w-full" alt="Generated Painting" />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default GenerateThumbnail;