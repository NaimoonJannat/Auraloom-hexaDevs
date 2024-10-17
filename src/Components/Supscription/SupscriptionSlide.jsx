"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "blue" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "blue" }}
            onClick={onClick}
        />
    );
}

const SubscriptionSlide = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='m-auto'>
            <div>
                <div class="flex flex-col items-center">
                    <span className="relative flex justify-center mt-20 font-bold">
                        <div
                            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 scale-75"
                        ></div>
                        <span className="relative z-10 bg-white px-6 text-2xl text-[#0077b6] font-montserrat">Our Pricing Plan</span>
                    </span>
                    <div class="mt-2">
                        <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                        <span class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                        <span class="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                    </div>

                    <p class=" font-medium mt-2 text-black">
                        You can get All Access by selecting your plan!
                    </p>

                    <a href="#" class="flex mt-2 items-center -mx-1 text-sm text-gray-700 capitalize dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        <span class="mx-1">read more</span>
                        <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
            <div className="mt-14 slider-container">
                <Slider {...settings}>
                    {data.map((d) => (
                        <div
                            key={d.title}
                            className="flex flex-col w-full max-w-sm p-8 space-y-4 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:border-gray-300 hover:dark:border-gray-500 transition-colors duration-300 hover:bg-sky-50"
                        >
                            <div className="flex-shrink-0">
                                <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-black uppercase rounded-lg">
                                    {d.title}
                                </h2>
                            </div>

                            <div className="flex-shrink-0">
                                <span className="pt-2 text-3xl font-bold text-black uppercase">
                                    {d.price}
                                </span>
                                <span className="text-gray-500">
                                    /month
                                </span>
                            </div>

                            <ul className="flex-1 space-y-4">
                                {d.features.map((feature, index) => (
                                    <li key={index} className="text-black">
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex justify-center space-x-4">
                                <button className="inline-flex items-center justify-center px-6 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none shadow-md">
                                    Free Trial
                                </button>
                                <button className="inline-flex items-center justify-center px-6 py-2 font-medium text-white uppercase transition-colors bg-orange-500 rounded-lg hover:bg-orange-700 focus:outline-none shadow-md">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

const data = [
    {
        title: 'Free',
        price: '$0.00',
        features: [
            'Access to basic features',
            'Limited storage (1Gb)',
            'Community support',
            'Monthly newsletter',
            'Access to community forums',
            'Basic usage analytics',
            'Email notifications for updates'
        ]
    },
    {
        title: 'Basic',
        price: '$9.99',
        features: [
            'Up to 5 projects',
            '10Gb of storage',
            'Email support',
            'Weekly tips and tricks',
            'Access to basic analytics',
            'Priority access to new features',
            'Custom branding options'
        ]
    },
    {
        title: 'Pro-User',
        price: '$19.99',
        features: [
            'Up to 20 projects',
            '50Gb of storage',
            'Priority email support',
            'Advanced analytics',
            'Collaborative tools for teams',
            'Monthly performance reports',
            'Access to beta features'
        ]
    },
    {
        title: 'Creator',
        price: '$29.99',
        features: [
            'Unlimited projects',
            '100Gb of storage',
            'Access to premium features',
            'Live chat support',
            'Special content creation tools',
            'Personalized content recommendations',
            'Social media sharing tools'
        ]
    },
    {
        title: 'Pro-Creator',
        price: '$49.99',
        features: [
            'All Creator features',
            'Advanced analytics',
            'Dedicated account manager',
            'Customized onboarding',
            'Exclusive webinars and events',
            'Early access to new features',
            'Collaboration with industry experts'
        ]
    }
];

export default SubscriptionSlide;
