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

            <div className='font-montserrat my-20 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url('https://i.postimg.cc/cH15hgM4/vinyl-3557749-1280.jpg')`,
                    }}
                >
                </div>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>

                    <p className='mt-3 lg:text-2xl font-medium text-[16px] text-center text-[#161D6F] '>
                        Welcome to Auraloom!
                    </p>
                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b border-[#161D6F] lg:w-1/4'></span>
                        <div className='text-xs text-center text-[#161D6F] uppercase  hover:underline'>
                            Sign Up  with email
                        </div>
                        <span className='w-1/5 border-b border-[#161D6F]  lg:w-1/4'></span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm text-sky-950 dark:text-sky-950">Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="block w-full px-5 py-3 mt-2w-full  border rounded-md border-gray-300 focus:outline-[#98DED9]  text-gray-900"
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
                                className="block w-full px-5 py-3 mt-2w-full  border rounded-md border-gray-300 focus:outline-[#98DED9]  text-gray-900"
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
                               className="block w-full px-5 py-3 mt-2w-full  border rounded-md border-gray-300 focus:outline-[#98DED9]  text-gray-900"
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
                               className="block w-full px-5 py-3 mt-2w-full  border rounded-md border-gray-300 focus:outline-[#98DED9]  text-gray-900"
                                {...register("password", { required: true })}
                            />
                            <span className="absolute top-96 right-24" onClick={() => setShowPassword(!showPassword)}>
                                {/* {showPassword ? <FaEyeSlash /> : <FaEye />} */}
                            </span>
                            {errors.password && (
                                <span className="text-red-500">This field is required</span>
                            )}
                        </div>

                        {/* <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-950 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    <span>Sign Up</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    
                                </button> */}
                        <div className="form-control mt-6 w-full col-span-2">
                            <button className="btn bg-[#00b4d8] rounded-lg hover:bg-[#0077b6] text-white">Sign Up</button>
                            <Toaster />
                        </div>
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
    );
};

export default Register;
