import React from "react";
import FileCard from "./cards/FileCard";

const files = [
    {
        name: "Myfile 1"
    },
    {
        name: "Myfile 2"
    },
    {
        name: "Myfile 3"
    },
    {
        name: "Myfile 4"
    },
    {
        name: "Myfile 5"
    },
    {
        name: "Myfile 6"
    },
    {
        name: "Myfile 7"
    },
    {
        name: "Myfile 8"
    },
    {
        name: "Myfile 9"
    },
    {
        name: "Myfile 10"
    },
    {
        name: "Myfile 11"
    },
    {
        name: "Myfile 12"
    },
    {
        name: "Myfile 13"
    },
    {
        name: "Myfile 14"
    },
]

const Files = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-20 px-7 bg-gradient-to-b from-white to-transparent border-b-2 backdrop-filter backdrop-blur-md flex flex-row items-center absolute z-20">
                <h1 className="text-gray-600 text-2xl font-bold">Files</h1>
            </div>
            <div id="files" className="w-full h-full pt-20 pb-6 overflow-scroll">
                {
                    files.map((item) => {
                        return <FileCard file={item}/>
                    })
                }
            </div>
        </div>
    );
}

export default Files;