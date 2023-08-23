"use client";
import { SessionProvider } from "next-auth/react";
import SideNavBar from "./SideNavBar";
import Storage from "../storage/Storage";
import Toast from "./Toast";
import { toastContext } from "@/context/ToastContext";
import { useContext } from "react";

const AppLayout = ({ children }) => {
    const { showToastMsg } = useContext(toastContext);
    return (
        <SessionProvider>
            <div className="flex">
                <SideNavBar />
                <div className="grid grid-cols-1 lg:grid-cols-3 w-full bg-[#1d232a]">
                    <div className="col-span-2">
                        <div>{children}</div>
                    </div>
                    <div className=" p-5 order-first md:order-last">
                        <Storage /> 
                    </div>
                </div>
            </div>
            {showToastMsg && <Toast msg={showToastMsg} />}
        </SessionProvider>
    );
};

export default AppLayout;
