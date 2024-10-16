"use client"
import Link from 'next/link';
import React from 'react';

const ListenLaterBanner = () => {
    return (
        <div>
            <div
                className="hero min-h-72"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/s9v7Q5n/0a5d05b3dca625dd69a66fc721625674.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello Bhaiya/Apu</h1>
                        <p className="mb-5">
                            we are glad have to you....
                        </p>
                        <Link href={'/dashboard'} className="btn bg-blue-500 text-white hover:text-slate-900 border-none">Go To Your Universe ✨</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListenLaterBanner;