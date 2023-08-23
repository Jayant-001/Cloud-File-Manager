"use client";
import FolderList from "@/components/folder/FolderList";
import { folderContext } from "@/context/FolderContext";
import { toastContext } from "@/context/ToastContext";
import { fetchSubFolders } from "@/services/fetchFolders";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const FolderDetails = ({ params }) => {
    const { folderId } = params;
    const searchParams = useSearchParams();
    const folderName = searchParams.get("name");

    const { showToastMsg } = useContext (toastContext);

    const { data: session } = useSession();
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        if ((session, folderId)) {
            fun();
        }
    }, [session, params, folderId, showToastMsg]);

    const fun = async () => {
        const data = await fetchSubFolders(session, folderId);
        setFolders(data);
    };

    return (
        <div>
            FolderDetails {folderName}
            <FolderList folders={folders} />
        </div>
    );
};

export default FolderDetails;
