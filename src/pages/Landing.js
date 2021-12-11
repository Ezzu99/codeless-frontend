import React from 'react';
import { useHistory } from 'react-router-dom';
import Pricing from './Pricing';
import Algos from './Algos';

const algorithms = [
    {
        algorithm: "Regression",
        catogries: [
            {
                name: "Logistic",
                description: "It is the appropriate regression analysis to conduct when the dependent variable is dichotomous (binary).  Like all regression analyses, the logistic regression is a predictive analysis."
            },
            {
                name: "Linear",
                description: "It is the supervised Machine Learning model in which the model finds the best fit linear line between the dependent and independent variables."
            },
            {
                name: "Polynomial",
                description: "It is a form of linear regression in which the relationship between the independent variable x and dependent variable y is modelded as an nth degree polynomial."
            }
        ]
    },
    {
        algorithm: "Classification",
        catogries: [
            {
                name: "Logistic",
                description: "It is the binary classification model in which output variable is assumes to be equal to a linear combination of the input variables, transformed by the logistic function."
            },
            {
                name: "K-Nearest Neighbour",
                description: "It is an algorithm that stores all available cases and classifies new cases based on similar measure."
            },
            {
                name: "Support Vector Machine",
                description: "It is the classification algorithm consisting of many decision trees."
            }
        ]
    },
    {
        algorithm: "Clustering",
        catogries: [
            {
                name: "Hierarical",
                description: "It is an algorithm that groups similar objects into groups called clusters. The endpoint is a set of clusters, where each cluster is distinct from other cluster, and the objects within each cluster are broadly similar to each other."
            },
            {
                name: "Diverse Hiererical",
                description: "It is also known as top-down approach. This algorithm does not require to pre-specify the number of clusters."
            },
            {
                name: "Agglomerative",
                description: "A structure that is more informative than the unstructured set of clusters returned by flat clustering. This clustering algorithm does not require us to pre-specify the number of clusters."
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