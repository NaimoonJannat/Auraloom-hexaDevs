import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="min-h-screen ">
            <div className="lg:flex justify-center items-center lg:mt-80 mx-auto hidden ">
                <CirclesWithBar
                    height="120"
                    width="120"
                    color="#4F46E5"
                    outerCircleColor="#4F46E5"
                    innerCircleColor="#4F46E5"
                    barColor="#4F46E5"
                    ariaLabel="circles-with-bar-loading"
                    visible={true}
                    
                    />
            </div>
            <div className="md:flex justify-center items-center md:mt-72 mx-auto hidden lg:hidden">
                <CirclesWithBar
                    height="100"
                    width="100"
                    color="#4F46E5"
                    outerCircleColor="#4F46E5"
                    innerCircleColor="#4F46E5"
                    barColor="#4F46E5"
                    ariaLabel="circles-with-bar-loading"
                    visible={true}
                    
                    />
            </div>            
            <div className="md:hidden flex justify-center items-center mt-40 mx-auto ">
                <CirclesWithBar
                    height="80"
                    width="80"
                    color="#4F46E5"
                    outerCircleColor="#4F46E5"
                    innerCircleColor="#4F46E5"
                    barColor="#4F46E5"
                    ariaLabel="circles-with-bar-loading"
                    visible={true}
                    
                    />
            </div>
            </div>
    );
};

export default Loader;