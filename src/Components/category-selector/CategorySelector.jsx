"use client";

import { useState } from "react";

import { FaLaptopCode, FaHeartbeat, FaFilm, FaPlane, FaUserTie, FaMusic, FaFlask, FaBusinessTime, FaLaugh, FaBook } from "react-icons/fa";

const categories = [
    { name: "Tech & Innovation", description: "AI, Startups, Gadgets", icon: <FaLaptopCode /> },
    { name: "Health & Wellness", description: "Mental Health, Fitness, Nutrition", icon: <FaHeartbeat /> },
    { name: "Entertainment & Pop Culture", description: "Movies, TV Shows, Celebrities", icon: <FaFilm /> },
    { name: "Travel & Adventure", description: "Destinations, Culture, Adventure", icon: <FaPlane /> },
    { name: "Personal Development", description: "Motivation, Productivity, Life Hacks", icon: <FaUserTie /> },
    { name: "Science & Education", description: "Physics, Space, History", icon: <FaFlask /> },
    { name: "Business & Finance", description: "Entrepreneurship, Marketing, Investing", icon: <FaBusinessTime /> },
    { name: "Comedy", description: "Stand-up, Satire, Improv", icon: <FaLaugh /> },
    { name: "Storytelling & Fiction", description: "Audiobooks, Short Stories, Drama", icon: <FaBook /> }
];

const CategorySelector = () => {

    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryClick = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((item) => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const handleSubmit = () => {
        console.log("Selected Categories:", selectedCategories);
    };


    return (
        <div> <span className="relative flex justify-center mt-20 mb-10 font-bold">
            <div
                className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 scale-75"
            ></div>

            <span className="relative z-10  px-6 text-2xl text-[#0077b6] font-montserrat">Choose Your Interests</span>
        </span>
            <div className="font-montserrat bg-cover bg-center bg-no-repeat my-20 bg-opacity-90"
                style={{
                    backgroundImage: 'url("https://i.ibb.co.com/VBcZffv/podcast-8520409-1280.jpg")',

                    padding: '2rem',
                }}>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`p-4 border rounded-lg cursor-pointer ${selectedCategories.includes(category.name)
                                ? "bg-[#00b4d8] text-white"
                                : "bg-[#caf0f8]  opacity-70"
                                }`}
                            onClick={() => handleCategoryClick(category.name)}
                        >
                            <div className="flex gap-3 items-center"> <span>{category.icon}</span> <h4 className="font-semibold"> {category.name}</h4></div>
                            <p className="text-sm">{category.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default CategorySelector;
