"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const StargedPage = () => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session.status === "unauthenticated") {
            router.push("/auth/login");
        }
    }, [session]);

    return (
        <div className="flex flex-col items-center mt-52">
            <h1 className="text-lg md:text-2xl font-medium">This feature is under development.</h1>
            <h2 className="text-md md:text-xl">It will be added soon.</h2>
        </div>
    );
};

export default StargedPage;
