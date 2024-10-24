"use client";
import { useContext, useState } from "react";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

const LogIn = () => {
    const { loginUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    // const router = useRouter();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;
        try {
            const result = await loginUser(email, password);
            if (result.user) {
                // router.push("/dashboard");
                router.push("/");
            }
        } catch (error) {
            // toast.error("Login failed. Please check your credentials.");
            // console.error("Login error:", error);
        }
    };

    return (
        <div className=" ">
            <div className="flex flex-col-reverse lg:flex-row my-12  p-7">
                <div className="items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="">
                                <Image
                                    className="w-20 lg:w-36 h-12 lg:h-20 mx-auto"
                                    src="https://i.ibb.co/ssjWYHm/logo.png"
                                    alt="Logo"
                                    width={144}
                                    height={60}
                                />
                            </div>
                            <p className="mt-3 text-sky-700 dark:text-sky-700">Log In to Your Account</p>
                        </div>

                        <div className="mt-8">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm text-sky-700 dark:text-sky-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="block w-full px-4 py-2 mt-2 text-sky-700 placeholder-sky-700  border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-sky-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="mt-6">
                                    <label htmlFor="password" className="block mb-2 text-sm text-sky-700 dark:text-sky-700">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="block w-full px-4 py-2 mt-2 text-sky-700 placeholder-sky-700  border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-sky-700 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="mt-6">
                                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Sign in
                                    </button>
                                    <Toaster />
                                </div>
                            </form>

                            <p className="mt-6 text-sm text-center text-sky-700">
                                Don&pos;t have an account yet? <Link href="/sign-up" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</Link>.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-cover md:block md:w-2/5 lg:block lg:w-2/5" style={{ backgroundImage: "url(https://i.ibb.co/ngW6qjg/pexels-photo-1081685.webp)" }}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">Log In to Your Account</h2>
                            <p className="max-w-xl mt-3 text-white">
                                Access your account securely with our user-friendly login interface. Enter your credentials to explore personalized features and manage your profile seamlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
