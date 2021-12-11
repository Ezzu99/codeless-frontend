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

const Login = () => {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    const history = useHistory();

    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('package', 'admin');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const submitButton = document.getElementById('submitButton');
        submitButton.disabled = true;
        submitButton.classList.remove('bg-indigo-600', 'hover:bg-indigo-700', 'focus:ring-2');
        submitButton.classList.add('bg-gray-400', 'pointer-events-none');

        if (!email || !password) {
            alert("Please enter your credentials!");
            submitButton.disabled = false;
            submitButton.classList.remove('bg-gray-400', 'pointer-events-none');
            submitButton.classList.add('bg-indigo-600', 'hover:bg-indigo-700', 'focus:ring-2');
            
            return;
        }
        
        try {
            let res = await request.post('/something/something', {
                email,
                password,
            });

            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('package', 'admin');   //instead of 'admin' should be JSON.stringify(res.data.package)
            (localStorage.getItem('package') === 'admin') ? history.push('/admin/dashboard') : history.push('/dashboard');
        }
        catch (e) {
            alert('Incorrect email or password!');
            (localStorage.getItem('package') === 'admin') ? history.push('/admin/dashboard') : history.push('/dashboard');
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
                <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Or{' '}
                    <NavLink to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                    get yourself registered
                    </NavLink>
                </p>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Email address"
                            onChange={(e) => setemail(e.target.value)}
                        />
                        </div>
                        <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        </div>
                    </div>
            
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                        </div>
            
                        <div className="text-sm">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot your password?
                        </a>
                        </div>
                    </div>
            
                    <div>
                        <button
                        id="submitButton"
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={handleSubmit}
                        >
                        Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;