import React from 'react';
import { useHistory } from 'react-router-dom';
import Pricing from './Pricing';
import Algos from './Algos';

const algorithms = [
    {
        algorithm: "Regression",
        catogries: [
            {
                name: "Linear",
                description: "It is the supervised Machine Learning model in which the model finds the best fit linear line between the dependent and independent variables"
            },
            {
                name: "Multiple",
                description: "It is an extension of simple linear regression. It is used when we want to predict the value of a variable based on the value of two or more other variables"
            },
            {
                name: "Support Vector Machine",
                description: "It constructs a hyperplane or set of hyperplanes in a high- or infinite-dimensional space, which can be used for classification, regression, or other tasks like outliers detection"
            }
        ]
    },
    {
        algorithm: "Classification",
        catogries: [
            {
                name: "K-Nearest Neighbour",
                description: "It is an algorithm that stores all available cases and classifies new cases based on similar measure"
            },
            {
                name: "Naive Bayes",
                description: "It is a simple technique for constructing classifiers: models that assign class labels to problem instances, represented as vectors of feature values, where the class labels are drawn from some finite set"
            },
            {
                name: "Decision Tree Classifier",
                description: "It uses a decision tree (as a predictive model) to go from observations about an item (represented in the branches) to conclusions about the item's target value (represented in the leaves)"
            }
        ]
    },
    {
        algorithm: "Clustering",
        catogries: [
            {
                name: "Density Based",
                description: "It is a density-based clustering non-parametric algorithm: given a set of points in some space, it groups together points that are closely packed together (points with many nearby neighbors), marking as outliers points that lie alone in low-density regions (whose nearest neighbors are too far away)"
            },
            {
                name: "Eclat",
                description: "It is an algorithm for finding frequent item sets in a transaction or database. Eclat algorithm uses a Depth first search for discovering frequent item sets"
            },
            {
                name: "K-Mean",
                description: "It is a method of vector quantization, originally from signal processing, that aims to partition n observations into k clusters in which each observation belongs to the cluster with the nearest mean (cluster centers or cluster centroid), serving as a prototype of the cluster"
            }
        ]
    }
]

const packages = [
    {
        title: "Basic",
        price: 99,
        isPopular: false,
        isLeft: true,
        features: [
            "something",
            "something",
            "something"
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
            "something",
            "something",
            "something",
        ]
    }
];

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
                        <button className="px-7 py-4 bg-gradient-to-br from-indigo-400 to-indigo-600 text-white text-xl font-semibold rounded-md shadow-md hover:bg-indigo-700" onClick={() => history.push('/login')}>Get Started</button>
                        <button className="ml-5 px-7 py-4 bg-white text-indigo-600 text-xl font-semibold rounded-md shadow-md hover:bg-indigo-50">Demo</button>
                    </div>
                </div>
                <div className="h-5/6 w-56 bgPattern absolute top-0 right-0" ></div>
                <div className="h-4/6 w-56 bgPattern absolute bottom-0 left-0" ></div>
            </div>
            <div id="algorithms" className="py-3 w-screen bg-gray-50 bg-gradient-gray flex flex-col relative z-20">
                <h1 className="px-7 py-4 text-gray-500 text-5xl text-center tracking-widest font-bold lg:text-2xl">ALGORITHMS</h1>
                <div className="w-full flex flex-row space-x-8 items-start justify-center">
                    {
                        algorithms.map((item, index) => {
                            return <Algos key={index} algorithm={item} />
                        })
                    }
                </div>
            </div>
            <div id="pricing" className="w-screen min-h-screen pb-4 relative z-30">
                <h1 className="mt-3 px-7 py-4 text-gray-500 text-5xl text-center tracking-widest font-bold lg:text-2xl">PRICING</h1>
                <p className="text-indigo-600 text-5xl text-center font-bold">The right price for you, whoever you are</p>
                <div className="mt-12 px-24 w-full flex flex-row items-center justify-center 2xl:mt-40">
                    {
                        packages.map((item, index) => {
                            return <Pricing key={index} title={item.title} price={item.price} isPopular={item.isPopular} isLeft={item.isLeft} features={item.features} />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Landing;