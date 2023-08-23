import React from "react";
import FolderItem from "./FolderItem";

const FolderList = ({folders}) => {
    const demofolders = [
        {
            id: 1,
            name: "Folder 1 ",
        },
        {
            id: 2,
            name: "Folder 2",
        },
        {
            id: 3,
            name: "Folder 3",
        },
        {
            id: 4,
            name: "Folder 4",
        },
        {
            id: 5,
            name: "Folder 5",
        },
    ];
    return (
        <div className="p-5 mt-5 bg-[#2a323c]">
            <h2 className="font-bold text-lg md:text-xl text-[#a6adba] flex items-center justify-between">
                Recent Folders
                <span className="text-sm text-[#8b919d] cursor-pointer ">
                    View all
                </span>
            </h2>
            <div className="mt-3 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {folders.map((item) => (
                    <FolderItem key={item.id} folder={item} />
                ))}
            </div>
        </div>
    );
};

export default FolderList;
