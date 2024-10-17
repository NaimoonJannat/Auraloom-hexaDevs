"use client"
import React from 'react';
import ContactBanner from './ContactBanner';
import Newsletter from '../Home/Newsletter';

const Contact = () => {
    return (
        <div className='container mx-auto'>
            {/* <h1>contact page</h1> */}
            <ContactBanner></ContactBanner>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Contact;