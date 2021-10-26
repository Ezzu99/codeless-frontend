import React from 'react';
import { useHistory } from 'react-router';
import { BsBoxArrowLeft, BsSearch, BsPersonCircle, BsPatchCheck, BsFiles } from 'react-icons/bs';
import Files from './Files';
import Activity from './Activity';

const files = [
    {
        name: "Myfile 1",
        algo: "linear regression",
        accuracy: 90,
        size: 500
    },
    {
        name: "Myfile 2",
        algo: "linear regression",
        accuracy: 75,
        size: 95
    },
    {
        name: "Myfile 3",
        algo: "linear regression",
        accuracy: 88,
        size: 54
    },
    {
        name: "Myfile 4",
        algo: "linear regression",
        accuracy: 89,
        size: 123
    },
    {
        name: "Myfile 5",
        algo: "linear regression",
        accuracy: 84,
        size: 542
    },
    {
        name: "Myfile 6",
        algo: "linear regression",
        accuracy: 70,
        size: 9
    },
    {
        name: "Myfile 7",
        algo: "linear regression",
        accuracy: 77,
        size: 800
    },
    {
        name: "Myfile 8",
        algo: "linear regression",
        accuracy: 86,
        size: 40
    },
    {
        name: "Myfile 9",
        algo: "linear regression",
        accuracy: 76,
        size: 50
    },
    {
        name: "Myfile 10",
        algo: "linear regression",
        accuracy: 81,
        size: 300
    },
    {
        name: "Myfile 11",
        algo: "linear regression",
        accuracy: 83,
        size: 20
    }
]

const Dashboard = () => {
    const history = useHistory();

    return (
        <div className="w-screen h-screen flex flex-col">
            <div id="nav" className="w-screen px-7 py-2 bg-indigo-600 shadow-lg flex items-center justify-between relative z-30">
                <h1 className="w-72 text-indigo-300  text-3xl font-bold pointer-events-none">Codeless</h1>
                <div className="flex-grow px-4 py-1 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-md flex flex-row items-center justify-start">
                    <BsSearch className="w-4 h-4 mr-3 text-indigo-200" />
                    <input id="fsearch" className="w-full text-indigo-200 bg-transparent outline-none border-none rounded-md placeholder-indigo-200 tracking-wide focus:outline-none focus:border-none" placeholder="Search files"></input>
                </div>
                <div className="w-72 flex justify-end">
                    <button className="px-3 py-1 bg-indigo-500 rounded-md flex flex-row items-center justify-center hover:bg-red-400 transition-all" onClick={() => history.push('/login')}>
                        <BsBoxArrowLeft className="w-5 h-5 mr-2 text-white" />
                        <span className="text-white tracking-wide">Logout</span>
                    </button>
                </div>
            </div>
            <div id="dashboard" className="w-screen h-full flex flex-row overflow-hidden">
                <div className="w-72 h-full border-r-2 bg-gradient-to-t from-transparent via-white to-white flex flex-col relative z-10">
                    <div className="h-24 px-7 flex flex-row items-center justify-start">
                        <BsPersonCircle className="w-12 h-12 bg-white rounded-full text-indigo-300" />
                        <div className="px-3 flex flex-col">
                            <p className="text-gray-600 font-bold">Ezaan Ali</p>
                            <p className="text-gray-500 transform -translate-y-1">ezaan1999</p>
                        </div>
                    </div>
                    <button className="mx-7 py-2 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-md text-white tracking-wider hover:shadow-lg transition-all">Test Data</button>
                    <div className="mt-6 px-7">
                        <span className="py-2 text-gray-500 flex flex-row items-center"><BsPatchCheck className="w-5 h-5 mr-2 bg-white" />Deluxe Member</span>
                        <span className="py-2 text-gray-500 flex flex-row items-center"><BsFiles className="w-5 h-5 mr-2 bg-white" />{files.length} Files</span>
                    </div>
                </div>
                <div className="bg-white flex-grow relative z-10">
                    <Files data={files}/>
                </div>
                <div className="w-72 h-full border-l-2 flex flex-col">
                    <Activity />
                </div>
                <div className="w-72 h-full bgPattern absolute top-0 left-0 z-0"></div>
            </div>
        </div>
    );
}

export default Dashboard;