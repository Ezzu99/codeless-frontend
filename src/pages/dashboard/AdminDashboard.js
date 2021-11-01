import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { AreaChart, Area } from 'recharts';
import { XAxis } from "recharts/lib/cartesian/XAxis";
import { YAxis } from "recharts";
import { Tooltip } from 'recharts/lib/component/Tooltip';

const users = [
    {},
    {},
    {},
    {}
]

const data = [
    {
      "value": 400
    },
    {
      "value": 351
    },
    {
      "value": 214
    },
    {
      "value": 393
    },
    {
      "value": 185
    },
    {
      "value": 154
    },
    {
      "value": 149
    },
    {
      "value": 221
    },
    {
      "value": 372
    },
    {
      "value": 400
    }
]

const CustomTooltip = ({ active, payload, label }) => {
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
              "Mar" :
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
              
          }{`: ${payload[0].value} users joined`}</p>
        </div>
      );
    }
  
    return null;
};

const AdminDashboard = () => {
    return (
        <div className="w-screen h-screen flex flex-col">
            <NavBar />
            <div className="w-screen h-full flex flex-row overflow-hidden">
                <SideBar length={users.length}/>
                <div className="bg-gray-100 flex-grow relative z-10">
                    <div className="w-full h-full flex flex-col">
                        <div className="w-full h-20 px-7 bg-gradient-to-b from-gray-100 via-gray-100 to-transparent flex flex-row items-center absolute z-20">
                            <h1 className="text-gray-600 text-2xl font-bold">Dashboard</h1>
                        </div>
                        <div id="activities" className="w-full h-full pt-20 pb-6 px-7 flex flex-col flex-wrap overflow-scroll">
                            <div className="w-96 h-2/5 mr-2 mb-2 pt-2 bg-white rounded-lg shadow-lg overflow-hidden">
                                <h1 className="px-3 text-md text-gray-500 font-bold">Users Joined</h1>
                                <AreaChart width={414} height={150} data={data}
                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8}/>
                                        <stop offset="100%" stopColor="#6366F1" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <Tooltip content={<CustomTooltip />}/>
                                    <Area type="monotone" dataKey="value" stroke="#6366F1" fillOpacity={1} fill="url(#colorUv)" />
                                </AreaChart>
                            </div>
                            <div className="w-96 h-2/5 mr-2 mb-2 px-3 py-2 bg-white rounded-lg shadow-lg">
                                <h1 className="text-md text-gray-500 font-bold">Activity</h1>
                            </div>
                            <div className="w-96 h-2/5 mr-2 mb-2 px-3 py-2 bg-white rounded-lg shadow-lg">
                                <h1 className="text-md text-gray-500 font-bold">Activity</h1>
                            </div>
                            <div className="w-96 h-2/5 mr-2 mb-2 px-3 py-2 bg-white rounded-lg shadow-lg">
                                <h1 className="text-md text-gray-500 font-bold">Activity</h1>
                            </div>
                            <div className="w-96 h-2/5 mr-2 mb-2 px-3 py-2 bg-white rounded-lg shadow-lg">
                                <h1 className="text-md text-gray-500 font-bold">Activity</h1>
                            </div>
                            <div className="w-96 h-2/5 mr-2 mb-2 px-3 py-2 bg-white rounded-lg shadow-lg">
                                <h1 className="text-md text-gray-500 font-bold">Activity</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;