"use client";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import SocialLogin from "../SocialLogIn/SocialLogIn";
import { useRouter } from "next/navigation";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const router = useRouter();
    const from = "/";

    const validatePassword = (password) => {
        if (password.length < 6) {
            toast.error('Password must contain at least 6 characters');
            return false;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one uppercase letter');
            return false;
        }
        if (!/[a-z]/.test(password)) {
            toast.error('Password must contain at least one lowercase letter');
            return false;
        }
        return true;
    };

    const onSubmit = (data) => {
        const { email, password } = data;

        const isValidPassword = validatePassword(password);
        if (!isValidPassword) return;

        createUser(email, password)
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your Account Created Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool',
                });

                router.push(from);
            })
            .catch((error) => {
                toast.error("Registration failed. Please try again.");
                console.error(error);
            });
    };

    return (
        <div>
            <section className="bg-white dark:bg-gray-200">
                <div className="flex justify-center min-h-screen">
                    <div
                        className="bg-cover md:block md:w-2/5 lg:block lg:w-2/5"
                        style={{
                            backgroundImage: "url('https://i.ibb.co.com/ngW6qjg/pexels-photo-1081685.webp')",
                        }}
                    ></div>

                    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div className="w-full">
                            <div className="text-center">
                                <div className="">
                                    <img className="w-20 lg:w-36 h-12 lg:h-20 mx-auto" src="https://i.ibb.co.com/ssjWYHm/logo.png" alt="" />
                                </div>
                                {/* <p className="mt-3 text-sky-700 dark:text-sky-700">Log In to Your Account</p> */}
                            </div>

                            <p className="mt-4 text-sky-950 dark:text-sky-950">
                                Start your journey with us by creating a new account. Sign up now to unlock exclusive features, connect with opportunities, and elevate your career path.
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-sm text-sky-950 dark:text-sky-950">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="block w-full px-5 py-3 mt-2 text-sky-950 placeholder-gray-950 bg-white border border-gray-950 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-sky-300 dark:border-gray-700 focus:border-blue-950 dark:focus:border-blue-950 focus:ring-blue-950 focus:outline-none focus:ring focus:ring-opacity-40"
                                        {...register("FullName", { required: true })}
                                    />
                                    {errors.FullName && (
                                        <span className="text-red-500">This field is required</span>
                                    )}
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-sky-950 dark:text-sky-950">Photo URL</label>
                                    <input
                                        type="text"
                                        placeholder="Photo URL"
                                        className="block w-full px-5 py-3 mt-2 text-sky-950 placeholder-gray-950 bg-white border border-gray-950 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-sky-300 dark:border-gray-700 focus:border-blue-950 dark:focus:border-blue-950 focus:ring-blue-950 focus:outline-none focus:ring focus:ring-opacity-40"
                                        {...register("photo_url", { required: true })}
                                    />
                                    {errors.photo_url && (
                                        <span className="text-red-500">This field is required</span>
                                    )}
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-sky-950 dark:text-sky-950">Email address</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="block w-full px-5 py-3 mt-2 text-sky-950 placeholder-gray-950 bg-white border border-gray-950 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-sky-300 dark:border-gray-700 focus:border-blue-950 dark:focus:border-blue-950 focus:ring-blue-950 focus:outline-none focus:ring focus:ring-opacity-40"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && (
                                        <span className="text-red-500">This field is required</span>
                                    )}
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-sky-950 dark:text-sky-950">Password</label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        className="block w-full px-5 py-3 mt-2 text-sky-950 placeholder-gray-950 bg-white border border-gray-950 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-sky-300 dark:border-gray-700 focus:border-blue-950 dark:focus:border-blue-950 focus:ring-blue-950 focus:outline-none focus:ring focus:ring-opacity-40"
                                        {...register("password", { required: true })}
                                    />
                                    <span className="absolute top-96 right-24" onClick={() => setShowPassword(!showPassword)}>
                                        {/* {showPassword ? <FaEyeSlash /> : <FaEye />} */}
                                    </span>
                                    {errors.password && (
                                        <span className="text-red-500">This field is required</span>
                                    )}
                                </div>

                                <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-950 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    <span>Sign Up</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <Toaster />
                                </button>
                            </form>

                            <div>
                                <p className="mt-4 text-center text-sky-950 dark:text-sky-950">or sign in with</p>
                                <SocialLogin />
                                <p className="mt-4 text-center text-sky-950 dark:text-sky-950">
                                    Already have an account?{" "}
                                    <Link href="/log-in" className="underline text-sky-950 dark:text-sky-950">
                                        Log In
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;
