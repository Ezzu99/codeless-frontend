import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Files from './Files';
import Activity from './Activity';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';

let request = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        post: {
            'Content-Type': 'application/json'
        }
    }
});

const Dashboard = () => {
    const [user, setuser] = useState([
        {
            userID: 0,
            username: localStorage.getItem('email'),
            name: localStorage.getItem('username'),
            package: 'premium'
        }
    ]);

    const [files, setfiles] = useState([
        // {
        //     name: "Myfile 1",
        //     algo: "linear regression",
        //     accuracy: 90,
        //     size: 3
        // },
        // {
        //     name: "Myfile 2",
        //     algo: "linear regression",
        //     accuracy:67,
        //     size: 1.3
        // }
    ]);

    const [activity, setactivity] = useState([
        // {
        //     aName: "Models Used",
        //     value: [
        //         {name: 'Reg', value: 5},
        //         {name: 'Clu', value: 1},
        //         {name: 'Cla', value: 3}
        //     ]
        // },
        // {
        //     aName: "Most Used Model",
        //     value: "Linear Regression"
        // },
        // {
        //     aName: "Most Accurate Data",
        //     value: "Myfile 1 with 90% accuracy"
        // }
    ]);
    
    let history = useHistory();

    useEffect(async () => {
        if (localStorage.getItem('loggedIn') === 'false') {
            alert("Please Login first!");
            history.push('/login');
            
            return;
        }
        else if (localStorage.getItem('package') === 'admin') {
            history.push('/admin/dashboard');

            return;
        }

        try {
            let res = await request.get('something', {
                headers: {
                    "Authorization": `${localStorage.getItem('token')}`
                }
            });

            setuser(res.data.user);
            setfiles(res.data.files);
            setactivity(res.data.activity);
        }
        catch (e) {
            // alert("Please check your internet connection!");
        }
    }, []);

    return (
        <div className="w-screen h-screen flex flex-col">
            <NavBar />
            <div id="dashboard" className="w-screen h-full flex flex-row overflow-hidden">
                <SideBar data={user} length={files.length}/>
                <div className="h-full bg-gray-100 flex-grow relative z-10">
                    {
                        <Files data={files}/>
                    }
                </div>
                <div className="w-72 h-full bg-gray-100 flex flex-col">
                    <Activity data={activity}/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;