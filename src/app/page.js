"use client";
import SearchBar from "@/components/common/SearchBar";
import FileList from "@/components/file/FileList";
import FolderList from "@/components/folder/FolderList";
import { toastContext } from "@/context/ToastContext";
import { fetchFolders } from "@/services/fetchFolders";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";

export default function Home() {
    const { data: session } = useSession();
    const [folders, setFolders] = useState([])
    const {showToastMsg} = useContext(toastContext)
    
    useEffect(() => {
        if(session) {
            fun();
        }
    }, [session, showToastMsg]);

    const fun = async () => {
        const data = await fetchFolders(session);
        setFolders(data);
    }

    return (
        <div className="p-5">
            <SearchBar />
            <FolderList folders={folders} />
            <FileList />
        </div>
    );
}
