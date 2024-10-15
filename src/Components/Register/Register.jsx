"use client";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
// import { useRouter } from "next/navigation";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: "",
        photoURL: "",
        email: "",
        password: "",
    });
    // const router = useRouter();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, photoURL, email, password } = formData;
        try {
            await createUser(email, password, name, photoURL);
            // router.push("/dashboard"); 
            // router.push("/");
        } catch (error) {
            console.error("Sign-up error:", error);
        }
    };


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
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm text-sky-950 dark:text-sky-950">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="block w-full px-5 py-3 mt-2w-full  border rounded-md border-gray-300 focus:outline-[#98DED9]  text-gray-900"

                            />

                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-sky-950 dark:text-sky-950">Photo URL</label>
                            <input
                                type="text"
                                name="photoURL"
                                placeholder="Photo URL"
                                value={formData.photoURL}
                                onChange={handleInputChange}
                                className="block w-full px-5 py-3 mt-2w-full  border rounded-md border-gray-300 focus:outline-[#98DED9]  text-gray-900"

                            />

                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-sky-950 dark:text-sky-950">Email address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="block w-full px-5 py-3 mt-2w-full  border rounded-md border-gray-300 focus:outline-[#98DED9]  text-gray-900"

                            />

                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-sky-950 dark:text-sky-950">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="block w-full px-5 py-3 mt-2w-full  border rounded-md border-gray-300 focus:outline-[#98DED9]  text-gray-900"

                            />

                        </div>

                        <div className="form-control mt-6 w-full col-span-2">
                            <button type="submit" className="btn bg-[#00b4d8] rounded-lg hover:bg-[#0077b6] text-white">Sign Up</button>
                            <Toaster />
                        </div>
                    </form>
                    <div>
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
