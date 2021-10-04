import React from 'react';

const Landing = () => {
    return (
        <div className="w-screen h-screen flex flex-row flex-wrap overflow-x-auto">
            <div className="w-screen h-screen bg-gray-50 flex flex-col overflow-hidden">
                <div className="w-full h-16 px-8 pt-2 flex flex-row items-center justify-between relative z-20">
                    <h1 className="text-blue-700 text-3xl font-bold pointer-events-none">Codeless</h1>
                    <span className="w-64 text-gray-500 text-xl flex flex-row justify-evenly">
                        <a href="#" className="text-gray-500 hover:text-gray-600">Algorithms</a>
                        <a href="#" className="text-gray-500 hover:text-gray-600">Pricing</a>
                    </span>
                    <button className="px-4 py-1 bg-white text-blue-700 text-xl font-semibold rounded-lg shadow-md hover:bg-blue-50">Log in</button>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center relative -top-10 z-10">
                    <h1 className="text-5xl font-bold lg:text-6xl">Data To Enrich Your <span className="text-blue-700">Online Business</span></h1>
                    <p className=" mt-4 text-gray-500 text-xl font-semibold">Our Machine Learning Algorithms ensure that your data is accurately trained</p>
                    <div className="w-5/12 mt-4 flex flex-row justify-center">
                        <button className="px-7 py-4 bg-blue-700 text-white text-xl font-semibold rounded-md shadow-md hover:bg-blue-800">Get Started</button>
                        <button className="ml-5 px-7 py-4 bg-white text-blue-700 text-xl font-semibold rounded-md shadow-md hover:bg-blue-50">Live Demo</button>
                    </div>
                </div>
                <div className="h-5/6 w-56 bg-hero-pattern bg-contain bg-repeat absolute top-0 right-0" ></div>
                <div className="h-4/6 w-56 bg-hero-pattern bg-contain bg-repeat absolute bottom-0 left-0" ></div>
            </div>
            <div className="w-screen h-screen bg-gray-800 relative z-20">

            </div>
        </div>
    );
}

export default Landing;