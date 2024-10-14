"use client";
import auth from '@/Components/Firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from 'firebase/auth';
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);
    const googleProvider = new GoogleAuthProvider();

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };


    // sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // google
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };



    //logout
    const logout = () => {
        setUser(null);
        signOut(auth);
    };

    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            }
        });
    }, []);

    const allvalues = {
        createUser, signInUser, googleLogin, user, loading, logout

    };
    return (
        <div>
            <AuthContext.Provider value={allvalues}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
}

export default AuthProvider;