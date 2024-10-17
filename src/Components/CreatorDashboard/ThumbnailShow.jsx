'use client';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Card Component
const Card = (props) => {
    return (
        <div className="bg-gray-900 rounded-sm overflow-hidden shadow-md mx-auto">
            <Image
                src={props.src}
                alt={props.title}
                width={400}
                height={400}
                className="object-cover object-center w-full"
            />
        </div>
    );
};

// Carousel Component
const Carousel = ({ children, currentIndex }) => {
    return (
        <div className="relative overflow-hidden">
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
                {children}
            </div>
        </div>
    );
};

const CarouselItem = ({ children }) => {
    return (
        <div className="flex-shrink-0 w-1/2 mx-1">
            {children}
        </div>
    );
};

export default function ThumbnailShow() {
    const images = [
        {
            src: 'https://i.ibb.co/PjttMdn/2983180a301c24aa8868c8143d5fac07.jpg',
            title: 'Image 1 Title',
        },
        {
            src: 'https://i.ibb.co/w7gKjYf/e3fcf477-2529-4c91-a520-7dca60ab6b7b.png',
            title: 'Image 2 Title',
        },
        {
            src: 'https://i.ibb.co/23njqqB/4f9344df-9a14-4dd8-89b2-755b5a2b372d.png',
            title: 'Image 3 Title',
        },
        {
            src: 'https://i.ibb.co/PjttMdn/2983180a301c24aa8868c8143d5fac07.jpg',
            title: 'Image 1 Title',
        },
        {
            src: 'https://i.ibb.co/w7gKjYf/e3fcf477-2529-4c91-a520-7dca60ab6b7b.png',
            title: 'Image 2 Title',
        },
        {
            src: 'https://i.ibb.co/23njqqB/4f9344df-9a14-4dd8-89b2-755b5a2b372d.png',
            title: 'Image 3 Title',
        },
        {
            src: 'https://i.ibb.co/PjttMdn/2983180a301c24aa8868c8143d5fac07.jpg',
            title: 'Image 1 Title',
        },
        {
            src: 'https://i.ibb.co/w7gKjYf/e3fcf477-2529-4c91-a520-7dca60ab6b7b.png',
            title: 'Image 2 Title',
        },
        {
            src: 'https://i.ibb.co/23njqqB/4f9344df-9a14-4dd8-89b2-755b5a2b372d.png',
            title: 'Image 3 Title',
        },
        {
            src: 'https://i.ibb.co/PjttMdn/2983180a301c24aa8868c8143d5fac07.jpg',
            title: 'Image 1 Title',
        },
        {
            src: 'https://i.ibb.co/PjttMdn/2983180a301c24aa8868c8143d5fac07.jpg',
            title: 'Image 1 Title',
        },
        {
            src: 'https://i.ibb.co/w7gKjYf/e3fcf477-2529-4c91-a520-7dca60ab6b7b.png',
            title: 'Image 2 Title',
        },
        {
            src: 'https://i.ibb.co/23njqqB/4f9344df-9a14-4dd8-89b2-755b5a2b372d.png',
            title: 'Image 3 Title',
        },
        {
            src: 'https://i.ibb.co/PjttMdn/2983180a301c24aa8868c8143d5fac07.jpg',
            title: 'Image 1 Title',
        },
        {
            src: 'https://i.ibb.co/w7gKjYf/e3fcf477-2529-4c91-a520-7dca60ab6b7b.png',
            title: 'Image 2 Title',
        },
        {
            src: 'https://i.ibb.co/23njqqB/4f9344df-9a14-4dd8-89b2-755b5a2b372d.png',
            title: 'Image 3 Title',
        },
        {
            src: 'https://i.ibb.co/PjttMdn/2983180a301c24aa8868c8143d5fac07.jpg',
            title: 'Image 1 Title',
        },
        {
            src: 'https://i.ibb.co/w7gKjYf/e3fcf477-2529-4c91-a520-7dca60ab6b7b.png',
            title: 'Image 2 Title',
        },
        {
            src: 'https://i.ibb.co/23njqqB/4f9344df-9a14-4dd8-89b2-755b5a2b372d.png',
            title: 'Image 3 Title',
        },
        {
            src: 'https://i.ibb.co/PjttMdn/2983180a301c24aa8868c8143d5fac07.jpg',
            title: 'Image 1 Title',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex flex-col justify-center items-center py-10">
            <div className="relative flex gap-2 w-full mx-0 max-w-4xl">
                <Carousel currentIndex={currentIndex}>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <Card src={image.src} />
                        </CarouselItem>
                    ))}
                </Carousel>
                <button onClick={handlePrevious} className="absolute left-0 top-1/2 transform -translate-y-1/2  p-2 rounded shadow">
                    <ArrowBigLeft></ArrowBigLeft>
                </button>
                <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2  p-2 rounded shadow">
                    <ArrowBigRight></ArrowBigRight>
                </button>
            </div>
        </div>
    );
}
