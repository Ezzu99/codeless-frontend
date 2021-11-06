import React from "react";
import FileCard from "./cards/FileCard";

const Files = (props) => {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-20 px-7 bg-gradient-to-b from-gray-100 via-gray-100 to-transparent flex flex-row items-center absolute z-20">
                <h1 className="text-gray-600 text-2xl font-bold">Files</h1>
            </div>
            <div id="files" className="w-full h-full pt-20 pb-6 flex flex-col overflow-scroll">
                {
                    props.data.map((item, index) => {
                        return <FileCard key={index} file={item}/>
                    })
                }
            </div>
        </div>
    );
}

export default Files;