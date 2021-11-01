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

const Activity = () => {
    return (
        <div className="w-full h-full flex flex-col bg-gray-100">
            <div className="w-full flex-grow h-20 px-7 bg-gradient-to-b from-gray-100 via-gray-100 to-transparent flex flex-row items-center fixed z-20">
                <h1 className="text-gray-600 text-xl font-bold">Activity Summary</h1>
            </div>
            <div id="activities" className="w-full h-full pt-20 pb-6 flex flex-col overflow-scroll">
                {
                    activity.map((items, index) => {
                        return <ActivityCard key={index} index={index} data={items}/>
                    })
                }
            </div>
        </div>
    );
}

export default Activity; 