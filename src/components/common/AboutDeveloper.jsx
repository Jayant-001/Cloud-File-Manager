import React from "react";
import Image from "next/image";

const AboutDeveloper = () => {
    return (
        <div className="w-full rounded-lg bg-[#2a323c] text-center p-5 flex flex-col items-center justify-center">
            <Image
                className="rounded-full"
                src="/dev avatar.webp"
                alt="avatar"
                width={50}
                height={50}
            />
            <h3 className="font-bold text-lg mt-2">Jayant Gupta</h3>
            <p>Full Stack Developer</p>
            <a
                href="https://jayant-gupta.vercel.app/"
                target="_blank"
                className="text-[#bd7171e6] font-semibold hover:underline"
            >
                View Profile
            </a>
            <p className="mt-3">
                Connect me on{" "}
                <a
                    href="https://www.linkedin.com/in/jayant-cse/"
                    target="_blank"
                    className="text-[#a6adba] hover:underline "
                >
                    LinkedIn
                </a>
            </p>
            <p>
                Find this project on{" "}
                <a
                    href="https://github.com/Jayant-001/Cloud-File-Manager"
                    target="_blank"
                    className="text-[#a6adba] hover:underline"
                >
                    Github
                </a>
            </p>
        </div>
    );
};

export default AboutDeveloper;
