'use client';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const CheckoutPaage = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const { user } = useContext(AuthContext);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const totalPrice = 25 || 50;  // Adjust the price accordingly

    const [loading, setLoading] = useState(false);  // For handling button and loading state

    useEffect(() => {
        // Fetch the client secret from the backend
        if (totalPrice > 0) {
            axios.post('https://auraloom-backend.vercel.app/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
                .catch(err => {
                    console.error("Error fetching client secret:", err);
                    setError("Failed to initiate payment. Please try again.");
                });
        }
    }, [totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prevent submission if Stripe or Elements haven't loaded or if no clientSecret
        if (!stripe || !elements || !clientSecret) {
            setError('Stripe has not loaded properly or client secret is missing.');
            return;
        }

        setLoading(true);  // Start loading state
        const card = elements.getElement(CardElement);

        if (!card) {
            setError('Card Element not found.');
            setLoading(false);
            return;
        }

        // Create a payment method
        const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (paymentError) {
            setError(paymentError.message);
            setLoading(false);
            return;
        }

        // Confirm the payment using the clientSecret
        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                },
            },
        });

        if (confirmError) {
            setError(confirmError.message);
            setLoading(false);
            return;
        }

        // Handle successful payment
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            // Save the payment to the database
            const payment = {
                email: user.email,
                price: totalPrice,
                transactionId: paymentIntent.id,
                date: new Date(),
                status: 'pending'
            };

            try {
                const res = await axios.post('https://auraloom-backend.vercel.app/payments', payment);
                if (res.data?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            } catch (err) {
                console.error("Error saving payment to database:", err);
                setError("Payment succeeded, but we couldn't save the payment details. Please contact support.");
            }

            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className="btn w-full border border-[#0077b6] text-lg font-semibold hover:bg-[#0077b6] my-8"
                    type="submit"
                    disabled={!stripe || !clientSecret || loading}
                >
                    {loading ? 'Processing...' : 'Pay'}
                </button>
                {error && <p className="text-red-600">{error}</p>}
                {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutPaage;
