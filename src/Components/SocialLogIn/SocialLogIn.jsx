"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const SocialLogIn = () => {
    const { googleLogin } = useContext(AuthContext);

    const router = useRouter();

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                if (result.user) {
                    router.push("/");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="flex justify-center mt-4 gap-4">
            <button
                onClick={handleGoogleLogin}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:bg-red-400 focus:ring focus:ring-red-300 focus:ring-opacity-50"
            >
                Sign in with Google
            </button>


            <button
                onClick={handleGoogleLogin}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:bg-red-400 focus:ring focus:ring-red-300 focus:ring-opacity-50"
            >
                Sign in with Google
            </button>

        </div>
    );
};

export default SocialLogIn;
