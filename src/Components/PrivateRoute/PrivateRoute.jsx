import { useContext } from 'react';
// import { useRouter } from 'next/router';
import { Circles } from 'react-loader-spinner';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    // const router = useRouter();

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Circles
                    height="80"
                    width="80"
                    color="#0E46A3"
                    ariaLabel="loading-indicator"
                />
            </div>
        );
    }

    if (!user) {
        // router.push('/login');
        return null;
    }

    return children;
};

export default PrivateRoute;
