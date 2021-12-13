import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';

let request = axios.create({
    baseURL: 'something',
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
});

const Signup = () => {
    const [fname, setfname] = useState();
    const [lname, setlname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [cpassword, setcpassword] = useState();
    const [userPackage, setuserPackage] = useState();

    let history = useHistory();

    const validate = (event) => {
        var pass = event;
        var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
        var test = reg.test(pass);
        if (test) {
            return true;
        } else{
            return false;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const submitButton = document.getElementById('submitButton');
        submitButton.disabled = true;
        submitButton.classList.remove('bg-indigo-600', 'hover:bg-indigo-700', 'focus:ring-2');
        submitButton.classList.add('bg-gray-400', 'pointer-events-none');
    
        if (password !== cpassword) {
            alert("Password do not match!");
            submitButton.disabled = false;
            submitButton.classList.remove('bg-gray-400', 'pointer-events-none');
            submitButton.classList.add('bg-indigo-600', 'hover:bg-indigo-700', 'focus:ring-2');
            
            return;
        }

        if (!validate(password)) {
            alert("Password must have 8-32 characters, atleast 1 number, atleast 1 lowercase and atleast 1 uppercase alphabat!");
            submitButton.disabled = false;
            submitButton.classList.remove('bg-gray-400', 'pointer-events-none');
            submitButton.classList.add('bg-indigo-600', 'hover:bg-indigo-700', 'focus:ring-2');
            
            return;
        }

        try {
            let res = await request.post('/something/something', {
                fname,
                lname,
                email,
                password,
                userPackage
            })
            
            alert(`We have sent a verification email to ${email}`);
            history.push('/login');
        }
        catch (e) {
            alert('Unable to register your account');
            submitButton.disabled = false;
            submitButton.classList.remove('bg-gray-400', 'pointer-events-none');
            submitButton.classList.add('bg-indigo-600', 'hover:bg-indigo-700', 'focus:ring-2');
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                <NavLink to="/">
                    <h1 className="text-indigo-600 text-3xl font-bold pointer-events-none text-center">Codeless</h1>
                </NavLink>
                <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md -space-y-px">
                        <div className="flex flex-row flex-grow items-center justify-between">
                            <div className="w-full mr-1">
                                <label htmlFor="First Name" className="sr-only">
                                    First Name
                                </label>
                                <input
                                    id="fname"
                                    name="fname"
                                    type="name"
                                    autoComplete="off"
                                    required
                                    className="appearance-none w-full relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="First name"
                                    onChange={(e) => setfname(e.target.value)}
                                />
                            </div>
                            <div className="w-full ml-1">
                                <label htmlFor="Last Name" className="sr-only">
                                    Last Name
                                </label>
                                <input
                                    id="lname"
                                    name="lname"
                                    type="name"
                                    autoComplete="off"
                                    required
                                    className="appearance-none w-full relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Last name"
                                    onChange={(e) => setlname(e.target.value)}
                                />
                            </div>
                        </div>
                        <br />
                        
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="off"
                                required
                                className="appearance-none w-full relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </div>
                        <br />

                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="off"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                onChange={(e) => setpassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="sr-only">
                                Confirm Password
                            </label>
                            <input
                                id="confirm-password"
                                name="password"
                                type="password"
                                autoComplete="off"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Confirm password"
                                onChange={(e) => setcpassword(e.target.value)}
                            />
                        </div>
                        <br />

                        <div className="py-2 border border-gray-300 rounded-lg shadow-sm bg-white">
                            <label htmlFor="package" className="ml-3 text-sm text-gray-500">
                                Choose a package
                            </label>
                            <div className="pl-3 text-sm flex flex-row items-center">
                                <input
                                    id="package1"
                                    name="package"
                                    type="radio"
                                    value="free"
                                    autoComplete="off"
                                    required
                                    className="appearance-none relative block border border-gray-300 text-indigo-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    onChange={() => setuserPackage("free")}
                                />
                                <label htmlFor="package" className="ml-2 mr-5 text-gray-500">
                                    Free
                                </label>
                                <input
                                    id="package2"
                                    name="package"
                                    type="radio"
                                    value="deluxe"
                                    autoComplete="off"
                                    required
                                    className="appearance-none relative block border border-gray-300 text-indigo-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    onChange={() => setuserPackage("deluxe")}
                                />
                                <label htmlFor="package" className="ml-2 mr-5 text-gray-500">
                                    Deluxe
                                </label>
                                <input
                                    id="package3"
                                    name="package"
                                    type="radio"
                                    value="premium"
                                    autoComplete="off"
                                    required
                                    className="appearance-none relative block border border-gray-300 text-indigo-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    onChange={() => setuserPackage("premium")}
                                />
                                <label htmlFor="package" className="ml-2 mr-5 text-gray-500">
                                    Premium
                                </label>
                            </div>
                        </div>
                    </div>
            
                    <div>
                        <button
                        id="submitButton"
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={handleSubmit}
                        >
                        Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;