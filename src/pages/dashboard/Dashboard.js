import React from 'react';
import Files from './Files';
import Activity from './Activity';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';

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
    },
    {
        name: "Myfile 12",
        algo: "linear regression",
        accuracy: 73,
        size: 10
    }
]

const Dashboard = () => {
    return (
        <div className="w-screen h-screen flex flex-col">
            <NavBar />
            <div id="dashboard" className="w-screen h-full flex flex-row overflow-hidden">
                <SideBar member="delux" length={files.length}/>
                <div className="h-full bg-gray-100 flex-grow relative z-10">
                    <Files data={files}/>
                </div>
                <div className="w-72 h-full bg-gray-100 flex flex-col">
                    <Activity />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;