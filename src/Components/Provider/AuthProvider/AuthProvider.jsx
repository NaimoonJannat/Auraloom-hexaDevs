"use client"
import auth from '@/Components/Firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
} from 'firebase/auth';

import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    // const googleProvider = new GoogleAuthProvider();

    // Sign up function
    const createUser = (email, password, name, photoURL) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Update Firebase user profile with displayName and photoURL
                return updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL,
                }).then(() => {
                    setUser({ ...user, displayName: name, photoURL });
                });
            })
            .catch((error) => {
                console.error("Sign-up error:", error);
                throw error;
            });
    };


    // Log in function
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                console.error("Login error:", error);
                throw error;
            });
    };

    // // google
    // const googleLogin = () => {
    //     setLoading(true);
    //     return signInWithPopup(auth, googleProvider);
    // };



    // Log out function
    const logout = () => {
        return signOut(auth)
            .then(() => setUser(null))
            .catch((error) => {
                console.error("Logout error:", error);
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, createUser, loginUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;