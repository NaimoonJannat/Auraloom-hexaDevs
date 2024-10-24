import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="flex justify-center items-center lg:mt-20">
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
    );
};

export default Loader;