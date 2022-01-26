import React from 'react';
import ActivityCard from './cards/ActivityCard';

const activity = [
    {
        aName: "Models Used",
        value: [
            {name: 'Reg', value: 5},
            {name: 'Clu', value: 1},
            {name: 'Cla', value: 3}
        ]
    },
    {
        aName: "Most Used Model",
        value: "Linear Regression"
    },
    {
        aName: "Most Accurate Data",
        value: "Myfile 1 with 90% accuracy"
    }
]

const Activity = (props) => {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full flex-grow h-20 px-7 bg-gradient-to-b from-gray-100 via-gray-100 to-transparent flex flex-row items-center fixed z-20">
                <h1 className="text-gray-600 text-xl font-bold">Activity Summary</h1>
            </div>
            <div id="activities" className="w-full h-full pt-20 pb-6 flex flex-col overflow-scroll">
                {
                    (props.data.length !== 0) ? props.data.map((items, index) => {
                        return <ActivityCard key={index} index={index} data={items}/>
                    }) :
                    <div>
                        <div className="h-52 mx-7 mb-2 bg-gray-300 opacity-100 rounded-md animate-pulse"></div>
                        <div className="h-20 mx-7 mb-2 bg-gray-300 opacity-50 rounded-md animate-pulse"></div>
                        <div className="h-20 mx-7 mb-2 bg-gray-300 opacity-20 rounded-md animate-pulse"></div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Activity; 