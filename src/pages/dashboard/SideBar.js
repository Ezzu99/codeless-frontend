import React from "react";
import { BsPersonCircle, BsPatchCheck, BsFiles, BsPeople } from 'react-icons/bs';

const SideBar = (props) => {
    const userType = localStorage.getItem('userType');
    const userOrFiles = (userType === 'admin') ? "Users" : "Files";
    const adminOrMember = (userType === 'admin') ? "Admin" : `${props.member} Member`;

    return (
        <>
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
                    <span className="py-2 text-gray-500 capitalize flex flex-row items-center"><BsPatchCheck className="w-5 h-5 mr-2 bg-white" />{adminOrMember}</span>
                    <span className="py-2 text-gray-500 capitalize flex flex-row items-center">{(userType === 'admin') ? <BsPeople className="w-5 h-5 mr-2 bg-white" /> : <BsFiles className="w-5 h-5 mr-2 bg-white" />}{props.length}{' '}{userOrFiles}</span>
                </div>
            </div>
            <div className="w-72 h-full bgPattern absolute top-0 left-0 z-0"></div>
        </>
    )
}

export default SideBar;