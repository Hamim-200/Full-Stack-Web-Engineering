// import React from 'react';

const Banner = () => {
    return (
        <div className="min-h-100 bg-base-300 my-7 rounded-2xl flex flex-col justify-center items-center text-center gap-4 px-6">
            <h1 className="font-bold text-5xl md:text-6xl">
                Build Your Dream Team
            </h1>
            <p className="text-lg text-gray-500 max-w-xl">
                Pick your favorite players, manage your budget, and create the ultimate squad.
            </p>
            <button className="btn btn-primary rounded-xl px-8">
                Get Started
            </button>
        </div>
    );
};

export default Banner;