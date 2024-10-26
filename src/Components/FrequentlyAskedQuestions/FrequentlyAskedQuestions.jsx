"use client";
import React, { useState } from 'react';

const FrequentlyAskedQuestions = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className='px-2 md:px-12 lg:px-40 mx-auto mt-5 md:mt-10 lg:mt-16'>
            <section className="">
                <div className="container  py-12 mx-auto">
                    <h1 className="text-2xl font-semibold  lg:text-4xl">Frequently Asked Questions</h1>
                    <p className="mt-2 text-lg ">Learn about starting a podcast, podcast hosting options and costs, how to promote your podcast, and more.</p>

                    <div className="mt-4 space-y-4 lg:mt-6">
                        {[
                            { question: "How to start a podcast?", answer: "Starting a podcast involves choosing a topic, planning your content, recording, and editing your episodes. There are various tools available to help you." },
                            { question: "Is starting a podcast easy?", answer: "While starting a podcast is relatively easy, producing high-quality content takes time and effort." },
                            { question: "Can I really start a podcast for free?", answer: "Yes, there are several free tools and platforms to get you started with podcasting." },
                            { question: "How do I get my podcast on Apple Podcasts?", answer: "To submit your podcast, you'll need to create an Apple ID and use the Apple Podcasts Connect platform." },
                            // { question: "How do I get my podcast on Spotify?", answer: "You can submit your podcast via Spotify for Podcasters after creating an account." },
                            // { question: "What statistics come with Podbean podcast hosting?", answer: "Podbean provides detailed analytics, including downloads, listener demographics, and more." },
                            // { question: "How do I switch to Podbean from another podcast hosting site?", answer: "You can easily migrate your podcast by following Podbean's migration guide and importing your RSS feed." },
                            // { question: "What are some good methods to promote a podcast?", answer: "Utilizing social media, creating a website, and networking with other podcasters are effective methods." },
                            // { question: "How do I monetize my podcast?", answer: "You can monetize your podcast through sponsorships, listener donations, or premium content." },
                        ].map(({ question, answer }, index) => (
                            <div key={index} className="p-4  border-2 border-slate-300  rounded-lg hover:bg-gray-100 hover:text-black transition duration-200">
                                <button
                                    className="flex items-center justify-between w-full focus:outline-none"
                                    onClick={() => toggleAnswer(index)}
                                >
                                    <h1 className={`font-bold text-lg ${openIndex === index ? 'text-sky-500' : ''} transition duration-200`}>
                                        {question}
                                    </h1>
                                    <span className="text-sky-400 font-light rounded-full transition-transform duration-300 ease-in-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </span>
                                </button>
                                {openIndex === index && (
                                    <p className="mt-4 text-sm">{answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FrequentlyAskedQuestions;
