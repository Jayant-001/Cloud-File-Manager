"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const session = useSession();
    const router = useRouter();

    console.log(session);

    if (session.status === "loading") {
        return <p className="mt-20 text-center">Loading</p>;
    }

    if (session.status === "authenticated") {
        router.push("/");
    }

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <button
                onClick={() => signIn("google")}
                className="btn btn-neutral"
            >
                Login
            </button>
        </div>
    );
};

export default LoginPage;
