import React from "react";
import { useHistory } from "react-router";
import { BsBoxArrowLeft, BsSearch } from 'react-icons/bs';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const history = useHistory();
    const userType = localStorage.getItem('userType');
    const placeholderText = (userType === 'admin') ? "Search Users" : "Search Files";

    return (
        <div id="nav" className="w-screen px-7 py-2 bg-indigo-600 shadow-lg flex items-center justify-between relative z-30">
            <h1 className="w-72 text-indigo-300  text-3xl font-bold pointer-events-none">Codeless</h1>
            <div className="flex-grow px-4 py-1 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-md flex flex-row items-center justify-start">
                {
                    (userType === 'admin') ?
                    <span className="w-full text-indigo-200 text-md tracking-widest flex flex-row items-center justify-evenly">
                        <NavLink to="/admin/dashboard" className="mx-1 hover:text-indigo-50" activeClassName="border-b-2 border-indigo-50">Dashboard</NavLink>
                        <NavLink to="/admin/users" className="mx-1 hover:text-indigo-50" activeClassName="border-b-2 border-indigo-50">Users</NavLink>
                        <NavLink to="/admin/algorithms" className="mx-1 hover:text-indigo-50" activeClassName="border-b-2 border-indigo-50">Algorithms</NavLink>
                        <NavLink to="/admin/pricing" className="mx-1 hover:text-indigo-50" activeClassName="border-b-2 border-indigo-50">Pricing</NavLink>
                    </span> :
                    <>
                        <BsSearch className="w-4 h-4 mr-3 text-indigo-200" />
                        <input id="fsearch" className="w-full text-indigo-200 bg-transparent outline-none border-none rounded-md placeholder-indigo-200 tracking-wide focus:outline-none focus:border-none" placeholder={placeholderText}></input>
                    </>
                }
            </div>
            <div className="w-72 flex justify-end">
                <button className="group px-3 py-1 bg-indigo-500 rounded-md flex flex-row items-center justify-center hover:bg-red-400 transition-all" onClick={() => history.push('/login')}>
                    <BsBoxArrowLeft className="w-5 h-5 mr-2 text-indigo-200 group-hover:text-white" />
                    <span className="text-indigo-200 tracking-wide group-hover:text-white">Logout</span>
                </button>
            </div>
        </div>
    )
}

export default NavBar;