import React from 'react';
import { useHistory} from 'react-router';
import { IoReturnDownForward } from 'react-icons/io5';
import Pricing from './Pricing';

const packages = [
    {
        title: "Basic",
        price: 99,
        isPopular: false,
        isLeft: true,
        features: [
            "Feature 1",
            "Feature 2"
        ]
    },
    {
        title: "Deluxe",
        price: 197,
        isPopular: true,
        isLeft: false,
        features: [
            "something",
            "something",
            "something",
            "something",
            "something"
        ]
    },
    {
        title: "Premium",
        price: 347,
        isPopular: false,
        isLeft: false,
        features: [
            "Feature 1",
            "something",
            "something",
        ]
    }
]

const Landing = () => {
    const history = useHistory();

    return (
        <div className="w-screen h-screen flex flex-row flex-wrap overflow-x-auto">
            <div className="w-screen h-screen bg-gray-50 flex flex-col overflow-hidden">
                <div className="w-full h-16 px-8 pt-2 flex flex-row items-center justify-between relative z-20">
                    <h1 className="text-indigo-600 text-3xl font-bold pointer-events-none">Codeless</h1>
                    <span className="w-64 text-gray-500 text-xl flex flex-row justify-evenly">
                        <a href="#algorithms" smooth={true} duration={1000} className="text-gray-500 hover:text-gray-400">Algorithms</a>
                        <a href="#pricing" smooth={true} duration={1000} className="text-gray-500 hover:text-gray-400">Pricing</a>
                    </span>
                    <button className="px-4 py-1 bg-white text-indigo-600 text-xl font-semibold rounded-md shadow-md hover:bg-indigo-50" onClick={() => history.push('/login')}>Log in</button>
                </div>
                <div className="w-full h-full px-28 flex flex-col items-center justify-center relative -top-10 z-10">
                    <h1 className="text-5xl font-bold lg:text-6xl">A codeless environment to help you <span className="text-indigo-600 text-center block">Train Your Data</span></h1>
                    <p className="mt-4 text-gray-500 text-xl font-semibold">Our Machine Learning Algorithms ensure that your data is accurately trained</p>
                    <div className="w-5/12 mt-4 flex flex-row justify-center">
                        <button className="px-7 py-4 bg-indigo-600 text-white text-xl font-semibold rounded-md shadow-md hover:bg-indigo-700">Get Started</button>
                        <button className="ml-5 px-7 py-4 bg-white text-indigo-600 text-xl font-semibold rounded-md shadow-md hover:bg-indigo-50">Live Demo</button>
                    </div>
                </div>
                <div className="h-5/6 w-56 bg-hero-pattern bg-contain bg-repeat absolute top-0 right-0" ></div>
                <div className="h-4/6 w-56 bg-hero-pattern bg-contain bg-repeat absolute bottom-0 left-0" ></div>
            </div>
            <div id="algorithms" className="w-screen h-screen bg-gray-50 bg-gradient-gray flex flex-col relative z-20">
                <div className="w-full h-32">
                    <h1 className="mt-3 px-7 py-4 text-gray-500 text-5xl text-center tracking-widest font-bold lg:text-2xl">ALGORITHMS</h1>
                    <div className="w-32">
                        <h2 className="text-xl">Method 1</h2>
                        <span className="flex flex-row items-center justify-center"><IoReturnDownForward className="mx-4 w-10 h-10 inline"/><p>Sub 1</p></span>
                        <span className="flex flex-row items-center justify-center"><IoReturnDownForward className="mx-4 w-10 h-10 inline"/><p>Sub 1</p></span>
                        <span className="flex flex-row items-center justify-center"><IoReturnDownForward className="mx-4 w-10 h-10 inline"/><p>Sub 1</p></span>
                    </div>
                </div>
            </div>
            <div id="pricing" className="w-screen min-h-screen bg-white relative z-20">
                <div className="w-full h-32">
                    <h1 className="mt-3 px-7 py-4 text-gray-500 text-5xl text-center tracking-widest font-bold lg:text-2xl">PRICING</h1>
                    <p className="text-indigo-600 text-5xl text-center font-bold">The right price for you, whoever you are</p>
                    <div className="mt-12 px-24 w-full flex flex-row items-center justify-center 2xl:mt-40">
                        {
                            packages.map((items, index) => {
                                return <Pricing key={index} title={items.title} price={items.price} isPopular={items.isPopular} isLeft={items.isLeft} features={items.features} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;