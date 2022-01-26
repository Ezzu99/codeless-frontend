import React from 'react';
import { BsPersonCircle, BsTrash } from 'react-icons/bs';

const usersData = [
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    },
    {
        username: 'ezaan1999',
        name: 'Ezaan Ali',
        email: 'ezaan1999.ali@gmail.com',
        dateJoined: '10-12-2020',
        package: 'Deluxe'
    }
]

const Users = () => {
    return (
        <div className="bg-gray-100 flex-grow flex items-start justify-start relative z-10 overflow-y-auto">
            <table className="w-full mt-6 mb-6">
                <thead>
                    <tr align="left" className="text-gray-600">
                        <th></th>
                        <th className="px-2">Name</th>
                        <th className="px-2">Email</th>
                        <th className="px-2">Package</th>
                        <th className="px-2">Date Joined</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map((user) => {
                            return (
                                <tr className="text-gray-600 bg-white rounded-md border-b">
                                    <td className="pl-4 py-2"><BsPersonCircle className="w-12 h-12 bg-white rounded-full text-indigo-300" /></td>
                                    <td className="px-2">{user.name}<span className="ml-2 text-gray-500">{user.username}</span></td>
                                    <td className="px-2">{user.email}</td>
                                    <td className="px-2">{user.package}</td>
                                    <td className="px-2">{user.dateJoined}</td>
                                    <td><button className="px-3 py-2 text-white bg-red-500 rounded-md hover:bg-red-400"><BsTrash className="w-5 h-5 text-white" /></button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Users;