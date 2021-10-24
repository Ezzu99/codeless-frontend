import React from 'react';

const activity = [
    {},
    {} 
]

const Activity = () => {
    return (
        <div className="w-full h-full flex flex-col bg-gray-100">
            <div className="w-full flex-grow h-20 px-7 bg-gradient-to-b from-gray-100 via-gray-100 to-transparent flex flex-row items-center fixed z-20">
                <h1 className="text-gray-600 text-xl font-bold">Activity Summary</h1>
            </div>
            <div id="activities" className="w-full h-full pt-20 flex flex-col overflow-scroll">
                {
                    activity.map(() => {
                        return <div className="mx-7 mb-2 px-7 py-5 bg-white rounded-lg">
                            <h1>activity 1</h1>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Activity; 