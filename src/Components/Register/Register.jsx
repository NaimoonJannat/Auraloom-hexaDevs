"use client";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: "",
        photoURL: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, photoURL, email, password } = formData;
        const createdAt = new Date(); // Capture the current date and time
        const role = 'user';
        const played = [];

        try {
            console.log("Attempting to create user..."); // Log when user creation starts
            // Create user using AuthContext
            const userCredential = await createUser(email, password, name, photoURL);
            console.log("User created successfully:", userCredential); // Log success

            // Construct the user data to send to the backend
            const singleUser = {
                name,
                email,
                photoURL,
                createdAt, // Add the account creation time
                role,
                played
            };

            // Send data to the backend after successful user creation
            console.log("Sending user data to the backend:", singleUser);
            const response = await fetch('https://auraloom-backend.vercel.app/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(singleUser),
            });

            const data = await response.json();
            console.log('User data saved:', data);
            if (response.ok) {
                toast.success("Registration successful!");
            } else {
                toast.error("Failed to save user data.");
                console.error("Backend response error:", data);
            }

        } catch (error) {
            console.error("Sign-up error:", error);
            toast.error("There was an error during registration.");
        }
    };

    return (
        <div>
            <div className='font-montserrat my-20 flex w-full max-w-sm mx-auto overflow-hidden  rounded-lg shadow-lg  lg:max-w-4xl '>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url('https://i.postimg.cc/cH15hgM4/vinyl-3557749-1280.jpg')`,
                    }}
                ></div>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <p className='mt-3 lg:text-2xl font-medium text-[16px] text-center '>
                        Welcome to Auraloom!
                    </p>
                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b border-[#161D6F] lg:w-1/4'></span>
                        <div className='text-xs text-center uppercase hover:underline'>
                            Sign Up with email
                        </div>
                        <span className='w-1/5 border-b border-[#161D6F] lg:w-1/4'></span>
                    </div>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm ">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="block w-full px-5 py-3 mt-2w-full border rounded-md border-gray-300 focus:outline-[#98DED9] text-gray-900"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm ">Photo URL</label>
                            <input
                                type="text"
                                name="photoURL"
                                placeholder="Photo URL"
                                value={formData.photoURL}
                                onChange={handleInputChange}
                                className="block w-full px-5 py-3 mt-2w-full border rounded-md border-gray-300 focus:outline-[#98DED9] text-gray-900"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm ">Email address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="block w-full px-5 py-3 mt-2w-full border rounded-md border-gray-300 focus:outline-[#98DED9] text-gray-900"
                            />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm ">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="block w-full px-5 py-3 mt-2w-full border rounded-md border-gray-300 focus:outline-[#98DED9] text-gray-900"
                            />
                        </div>

                        <div className="form-control mt-6 w-full col-span-2">
                            <button type="submit" className="btn bg-[#00b4d8] rounded-lg hover:bg-[#0077b6] text-white">Sign Up</button>
                            <Toaster />
                        </div>
                    </form>
                    <div>
                        <p className="mt-4 text-center">
                            Already have an account?{" "}
                            <Link href="/log-in" className="underline">
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
