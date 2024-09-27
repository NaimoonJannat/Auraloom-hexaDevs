import React from 'react';
import img from '../../../public/doodle.svg'
import Image from 'next/image';
const Newsletter = () => {
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 border-2 border-[#00B4D8] text-[#00B4D8]">
        <div className="flex flex-col justify-between">
            <div className="space-y-2">
                <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let&apos;s talk!</h2>
                <div className="text-gray-400">Send us a message!</div>
            </div>
            <Image src={img} alt="" className="h-52 md:h-full" />
        </div>
        <form noValidate="" className="space-y-6">
            <div>
                <label htmlFor="name" className="text-sm">Full name</label>
                <input id="name" type="text" placeholder="" className="w-full p-3 rounded " />
            </div>
            <div>
                <label htmlFor="email" className="text-sm">Email</label>
                <input id="email" type="email" className="w-full p-3 rounded " />
            </div>
            <div>
                <label htmlFor="message" className="text-sm">Message</label>
                <textarea id="message" rows="3" className="w-full p-3 rounded "></textarea>
            </div>
            <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded btn btn-accent bg-[#00B4D8]">Send Message</button>
        </form>
    </div>
    );
};

export default Newsletter;