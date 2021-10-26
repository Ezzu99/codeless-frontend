import React from 'react';

const FileCard = (props) => {
    return (
        <div className="w-full px-7 py-1 border-b-2 flex flex-row justify-between">
            <div>
                <h1 className="text-gray-700 text-base tracking-wide">{props.file.name}</h1>
                <p className="text-gray-400">Uploaded 3 hrs ago • {props.file.size} MB</p>
            </div>
            <div className="ml-2 text-gray-400 flex-grow flex flex-col items-end justify-center">
                <p className="text-right"><span className="mr-2 text-indigo-500 text-xl font-bold">{props.file.accuracy?props.file.accuracy:0}%</span>accurate</p>
                <p className="text-right capitalize">{props.file.algo}</p>
            </div>
            <div className="ml-4 flex items-center justify-center">
                <button className="w-28 px-3 py-2 bg-gradient-to-br from-indigo-400 to-indigo-500 text-white rounded-md hover:to-indigo-600 transition-all">Test Again</button>
            </div>
        </div>
    );
}

export default FileCard;