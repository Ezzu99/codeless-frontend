import React, { useEffect } from "react";
import { useHistory } from "react-router-dom/";
import { AreaChart, Area, BarChart, Bar } from 'recharts';
import { XAxis } from "recharts/lib/cartesian/XAxis";
import { YAxis } from "recharts";
import { Tooltip } from 'recharts/lib/component/Tooltip';

const CustomTooltipArea = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="px-3 py-2 bg-white border-2 text-indigo-500 rounded-md shadow-lg">
                <p className="label">{
                    (label === 0) ?
                    "Jan" :
                    (label === 1) ?
                    "Feb" :
                    (label === 2) ?
                    "Mar" :
                    (label === 3) ?
                    "Apr" :
                    (label === 4) ?
                    "May" :
                    (label === 5) ?
                    "Jun" :
                    (label === 6) ?
                    "Jul" :
                    (label === 7) ?
                    "Aug" :
                    (label === 8) ?
                    "Sep" :
                    (label === 9) ?
                    "Oct" :
                    (label === 10) ?
                    "Nov" : "Dec"
                    }{`: ${payload[0].value} users joined`}
                </p>
            </div>
        );
    }
  
    return null;
};

const CustomTooltipBar = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="px-3 py-2 bg-white border-2 text-indigo-500 rounded-md shadow-lg">
                <p className="label">{` ${payload[0].value}%`}</p>
            </div>
        );
    }
  
    return null;
};

const AdminDashboard = (props) => {
    return (
        <div className="bg-gray-100 flex-grow relative z-10">
            <div className="w-full h-full flex flex-col">
                <div id="activities" className="w-full h-full py-7 px-7 flex flex-col flex-wrap overflow-scroll">
                    <div className="w-96 h-48 mr-2 mb-2 pt-2 bg-white rounded-lg shadow-lg flex flex-col items-center justify-between">
                        <h1 className="w-full px-3 text-md text-gray-500 text-left font-bold">Users Joined</h1>
                        <AreaChart width={384} height={150} data={props.data[0].usersJoined}
                            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8}/>
                                <stop offset="100%" stopColor="#6366F1" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <Tooltip content={<CustomTooltipArea />}/>
                            <Area type="monotone" dataKey="value" stroke="#6366F1" fillOpacity={1} fill="url(#colorUv)" />
                        </AreaChart>
                    </div>
                    <div className="w-96 h-48 mr-2 mb-2 pt-2 bg-white rounded-lg shadow-lg flex flex-col items-center justify-between">
                        <h1 className="w-full px-3 text-md text-gray-500 text-left font-bold">Average Score</h1>
                        <BarChart width={384} height={150} data={props.data[1].averageScore}
                            margin={{ top: 10, right: 12, left: -12, bottom: 4 }}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip allowEscapeViewBox={{ y: true }} content={<CustomTooltipBar />}/>
                            <Bar dataKey="value" fill="#6366F1" />
                        </BarChart>
                    </div>
                    <div className="w-96 h-48 mr-2 mb-2 pt-2 bg-white rounded-lg shadow-lg flex flex-col items-center justify-between">
                        <h1 className="w-full px-3 text-md text-gray-500 text-left font-bold">Activity</h1>
                    </div>
                    <div className="w-96 h-48 mr-2 mb-2 pt-2 bg-white rounded-lg shadow-lg flex flex-col items-center justify-between">
                        <h1 className="w-full px-3 text-md text-gray-500 text-left font-bold">Activity</h1>
                    </div>
                    <div className="w-96 h-48 mr-2 mb-2 pt-2 bg-white rounded-lg shadow-lg flex flex-col items-center justify-between">
                        <h1 className="w-full px-3 text-md text-gray-500 text-left font-bold">Activity</h1>
                    </div>
                    <div className="w-96 h-48 mr-2 mb-2 pt-2 bg-white rounded-lg shadow-lg flex flex-col items-center justify-between">
                        <h1 className="w-full px-3 text-md text-gray-500 text-left font-bold">Activity</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;