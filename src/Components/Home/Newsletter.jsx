'use client';
import React, { useState } from 'react';
import img from '../../../public/doodle.svg';
import Image from 'next/image';
import emailjs from 'emailjs-com';

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your service ID, template ID, and user ID from Email.js
    const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const USER_ID = process.env.NEXT_PUBLIC_USER_ID;
    

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setError('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 border-2 border-[#0077B6] text-[#0077B6]">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let&apos;s talk!</h2>
          <div className="text-gray-400">Send us a message!</div>
        </div>
        <Image src={img} alt="" className="h-52 md:h-full" />
      </div>
      {isSubmitted ? (
        <div className="text-center text-green-500">Message sent successfully!</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="text-red-500">{error}</div>}
          <div>
            <label htmlFor="name" className="text-sm">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded btn btn-accent bg-[#0077B6]"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;
