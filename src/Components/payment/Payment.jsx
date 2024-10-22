'use client';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Image from 'next/image';
import img1 from '../../../public/mastercard.png';
import img2 from '../../../public/paypal.png';
import img3 from '../../../public/images.png';
import img4 from '../../../public/visa.png';
import img5 from '../../../public/stripe.png';
import logo1 from "../../../public/auraloom-logo.png";
import { Elements } from '@stripe/react-stripe-js';
import CheckoutPaage from './CheckoutPaage';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Payment = () => {


    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                    <div className="flex justify-center mb-6">
                        <Image
                            src={logo1}
                            alt="Logo"
                            className="w-40"
                        />
                    </div>
                    <h2 className="text-2xl font-bold text-center mb-8">
                        Complete Payment Registration
                    </h2>

                    {/* FORM */}
                    <div >
                        {/* Personal Details */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <label className="block text-sm font-medium mb-1">Address line</label>
                                <input
                                    type="text"
                                    placeholder="P.O. Box 1234"
                                    className="w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">City</label>
                                <input
                                    type="text"
                                    placeholder="Arusha"
                                    className="w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">State</label>
                                <input
                                    type="text"
                                    placeholder="Tanzania"
                                    className="w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium mb-1">Postal Code</label>
                                <input
                                    type="text"
                                    placeholder="9090"
                                    className="w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <h3 className="text-lg font-semibold mt-8 mb-4">Payment methods</h3>
                        <div className="flex space-x-4">
                            <Image src={img1} alt="MasterCard" className="h-8 w-8" />
                            <Image src={img2} alt="PayPal" className="h-8 w-8" />
                            <Image src={img3} alt="GPay" className="h-8 w-8" />
                            <Image src={img4} alt="Visa" className="h-8 w-8" />
                            <Image src={img5} alt="Stripe" className="h-8 w-8" />
                        </div>

                        <div className='mt-10'>
                            <Elements stripe={stripePromise}>
                                <CheckoutPaage />
                            </Elements>
                        </div>
                        {/* Submit Button */}
                        {/* <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white p-3 rounded-md text-lg hover:bg-green-700"
                            >
                                Next
                            </button>
                        </div> */}
                    </div>
                    <div className="mt-6 text-center text-sm text-gray-500">
                        <p>Instructions | License | Terms of Use | Privacy</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Payment;
