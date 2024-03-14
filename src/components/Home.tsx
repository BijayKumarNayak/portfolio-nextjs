"use client";
import profileImage from "../../public/images/student.png"
import { Spotlight } from "./ui/Spotlight";
import { Meteors } from "./ui/meteors";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Image from "next/image";
import Link from "next/link";
export function Home() {
    const words = [
        {
            text: "Hi",
        },
        {
            text: "I",
        },
        {
            text: "Am",
        },

        {
            text: "BIJAY",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    const words2 = [
        {
            text: "Frontend",
            className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "Developer"
        }
    ];
    return (
        <div className="flex items-center justify-center h-screen px-10" id='home'>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <Meteors number={20} />
            <div className="w-1/2">
                <TypewriterEffectSmooth words={words} />
                <TypewriterEffectSmooth words={words2} />
                <div className="flex items-center  gap-4">
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            View Resume
                        </span>
                    </button>
                    <Link href="#contact">
                        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                Contact Me
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="w-1/2 p-10">
                <div className="h-full w-full rounded-md overflow-hidden object-cover flex justify-center">
                    <Image src={profileImage} alt="profile image" width={400} height={400} className=" h-full w-full  object-cover" />
                </div>
            </div>
        </div>
    );
}

