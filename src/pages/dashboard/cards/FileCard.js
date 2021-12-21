import React from 'react';
import { BsBoxArrowInDown } from 'react-icons/bs';

const FileCard = (props) => {
    return (
        <div className="ml-7 mr-2 mb-2 px-4 py-2 bg-white rounded-md shadow-lg flex flex-row justify-between">
            <div>
                <h1 className="text-gray-700 text-base tracking-wide">{props.file.f_name}</h1>
                <p className="text-gray-400">Uploaded 3 hrs ago • {parseFloat(props.file.size).toFixed(1)} MB</p>
            </div>
            <div className="ml-2 text-gray-400 flex-grow flex flex-col items-end justify-center">
                <p className="text-right"><span className="mr-2 text-indigo-500 font-bold">{props.file.accuracy?props.file.accuracy:0}%</span>accurate</p>
                <p className="text-right capitalize">{props.file.algo}</p>
            </div>
            <div className="ml-4 flex items-center justify-center">
                <button className="px-3 pt-1 pb-2 bg-gradient-to-br from-indigo-400 to-indigo-500 text-white rounded-md hover:to-indigo-600 transition-all"><BsBoxArrowInDown className="w-5 h-5 text-white" /></button>
            </div>
        </div>
    );
}

export default FileCard;