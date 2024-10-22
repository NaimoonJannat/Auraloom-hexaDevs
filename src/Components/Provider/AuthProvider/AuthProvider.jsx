"use client";
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
    const [loading, setLoading] = useState(true); // Initialize loading state

    // Sign up function
    const createUser = (email, password, name, photoURL) => {
        setLoading(true); // Start loading
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Update Firebase user profile with displayName and photoURL
                return updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL,
                }).then(() => {
                    setUser({ ...user, displayName: name, photoURL });
                    setLoading(false); // Stop loading after user is set
                });
            })
            .catch((error) => {
                console.error("Sign-up error:", error);
                setLoading(false); // Stop loading on error
                throw error;
            });
    };

    // Log in function
    const loginUser = (email, password) => {
        setLoading(true); // Start loading
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setLoading(false); // Stop loading after login
            })
            .catch((error) => {
                console.error("Login error:", error);
                setLoading(false); // Stop loading on error
                throw error;
            });
    };

    // Log out function
    const logout = () => {
        setLoading(true); // Start loading
        return signOut(auth)
            .then(() => {
                setUser(null);
                setLoading(false); // Stop loading after logout
            })
            .catch((error) => {
                console.error("Logout error:", error);
                setLoading(false); // Stop loading on error
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false); // Stop loading after checking auth state
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, createUser, loginUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
