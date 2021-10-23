import React from "react";
import FileCard from "./cards/FileCard";

const Files = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-16 px-7 border-b-2 flex flex-row items-center">
                <h1 className="text-gray-600 text-2xl font-bold">Files</h1>
            </div>
            <FileCard />
        </div>
    );
}

export default Files;