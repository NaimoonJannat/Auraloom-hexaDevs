"use client"
import Image from 'next/image';
import { useState } from 'react';

const ImageGenerator = () => {
    const [images, setImages] = useState([])
    const [mode, setMode] = useState('standard');

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'standard' ? 'advanced' : 'standard'));
    };
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
            <section className="bg-gray-900 text-center min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-sky-300">
                    Create beautiful Thumbnail with <br /> Artificial Intelligence
                </h1>

                <p className="text-gray-400 text-lg sm:text-xl max-w-lg mx-auto mb-8">
                    Be advised that image generation requires an active OpenAI, Stability AI, or Stable Diffusion token.
                </p>

                {/* Toggle Switch */}
                <div className="flex items-center justify-center mb-6">
                    <span className="text-gray-300 mr-4">Standard</span>
                    <button
                        onClick={toggleMode}
                        className={`relative w-14 h-7 ${mode === 'standard' ? 'bg-gray-600' : 'bg-sky-500'} rounded-full transition-all`}
                    >
                        <span
                            className={`absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-all ${mode === 'advanced' ? 'transform translate-x-7' : ''}`}
                        />
                    </button>
                    <span className="text-gray-300 ml-4">Advanced</span>
                </div>

                {/* Input and Button */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-md mx-auto">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="prompt"
                            placeholder="Describe what you want or hit a tag below"
                            className="bg-gray-800 text-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                        <button type="submit" className="bg-sky-500 hover:bg-sky-600 mt-2 text-white px-6 py-3 rounded-lg">
                            Generate
                        </button>
                    </form>
                </div>

                {/* Tags */}
                <div className="mt-8 space-x-2  text-sm sm:text-base">
                    <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full cursor-pointer">Creative</span>
                    {/* <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full cursor-pointer hidden lg:block">Hyperreality</span> */}
                    {/* <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full cursor-pointer hidden lg:block">Steampunk</span> */}
                    <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full cursor-pointer">Animation</span>
                    <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full cursor-pointer">Business</span>
                </div>

                {/* Limits Text */}
                <p className="text-gray-400 mt-4 text-sm">
                    Limits per hour: 80 images for all visitors and up to 2 requests from a single visitor. Used: 0 images, 0 requests.
                </p>


            </section>
            <div>
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

export default ImageGenerator;
