import React from 'react';
import { FaDollarSign, FaCheck } from 'react-icons/fa';

const Pricing = (props) => {
    return (
        <div>
            {
                (props.isPopular == true) ?
                <div className="w-96 border-2 border-indigo-600 rounded-lg shadow-lg flex flex-col items-center">
                    <div className="w-max px-3 text-white text-sm text-center font-semibold bg-indigo-600 rounded-full relative -top-3">
                        <p>MOST POPULAR</p>
                    </div>
                    <div className="w-full py-4 border-b-2 text-black text-center text-3xl font-bold flex flex-col items-center">
                        <p>{props.title}</p>
                        <p className="mt-2 text-lg flex flex-row items-center"><FaDollarSign className="w-6 h-6" /><span className="ml-1 text-5xl font-extrabold">{props.price}</span><span className="ml-2 text-gray-500">/month</span></p>
                    </div>
                    <div className="w-full h-full px-8 py-5 bg-gray-50 rounded-md flex flex-col justify-between">
                        {
                            props.features.map((items, index) => {
                                return <div>
                                    <p className="text-gray-600"><FaCheck className="text-green-600 mr-2 inline" />{items}</p>
                                </div>
                            })
                        }
                        <div className="w-full mt-11 flex flex-row justify-center">
                            <button className="w-full mx-2 py-2 bg-indigo-600 text-white text-2xl rounded-lg">Subscribe</button>
                        </div>
                    </div>
                </div> :
                (props.isLeft == true) ?
                <div className="w-80 border-2 border-r-0 rounded-l-lg shadow-lg flex flex-col">
                    <div className="w-full py-4 border-b-2 text-black text-center text-3xl font-bold flex flex-col items-center">
                        <p>{props.title}</p>
                        <p className="mt-2 text-lg flex flex-row items-center"><FaDollarSign className="w-6 h-6" /><span className="ml-1 text-5xl font-extrabold">{props.price}</span><span className="ml-2 text-gray-500">/month</span></p>
                    </div>
                    <div className="w-full h-full px-8 py-5 bg-gray-50 rounded-bl-md flex flex-col justify-between">
                        {
                            props.features.map((items, index) => {
                                return <div>
                                    <p className="text-gray-600"><FaCheck className="text-green-600 mr-2 inline" />{items}</p>
                                </div>
                            })
                        }
                        <div className="w-full mt-11 flex flex-row justify-center">
                            <button className="w-full mx-2 py-2 bg-white text-indigo-600 text-2xl rounded-lg shadow-md">Subscribe</button>
                        </div>
                    </div>
                </div> :
                <div className="w-80 border-2 border-l-0 rounded-r-lg shadow-lg flex flex-col">
                    <div className="w-full py-4 border-b-2 text-black text-center text-3xl font-bold flex flex-col items-center">
                        <p>{props.title}</p>
                        <p className="mt-2 text-lg flex flex-row items-center"><FaDollarSign className="w-6 h-6" /><span className="ml-1 text-5xl font-extrabold">{props.price}</span><span className="ml-2 text-gray-500">/month</span></p>
                    </div>
                    <div className="w-full h-full px-8 py-5 bg-gray-50 rounded-br-md flex flex-col justify-between">
                        {
                            props.features.map((items, index) => {
                                return <div>
                                    <p className="text-gray-600"><FaCheck className="text-green-600 mr-2 inline" />{items}</p>
                                </div>
                            })
                        }
                        <div className="w-full mt-11 flex flex-row justify-center">
                            <button className="w-full mx-2 py-2 bg-white text-indigo-600 text-2xl rounded-lg shadow-md">Subscribe</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Pricing;