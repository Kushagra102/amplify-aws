"use client";

import Link from "next/link";
import React from "react";
import TypewriterComponent from "typewriter-effect";
import Image from "next/image";

const LandingHero = () => {

    return (
        <div className="text-white font-bold py-12 sm:py-36 text-center space-y-10">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                {" "}
                Utilize the Power of Communities
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                <TypewriterComponent
                    options={{
                        strings: [
                            "Build Community.",
                            "Join Community.",
                            "Collaborate.",
                            "Like-Minded People.",
                            "Share Ideas.",
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400">
                Become x10 more productive by utilizing the power of Communities.
            </div>
            <div>
                <Link href={"/community"}>
                    <button
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl try-out-btn bg-gradient-to-r from-rose-600 via-orange-500 to-amber-400 text-white border-0 h-16 rounded-md px-8"
                    >
                        Give it a try!
                    </button>
                </Link>
            </div>
            <div className="text-zinc-400 text-xs md:text-sm font-normal mt-10">
                This Project was created by <strong>@Kushagra Garg & @Geoffrey Anto</strong>
                <br />
                to build communities.
            </div>
            <div className="relative m-auto h-32 w-32 sm:h-64 sm:w-64">
                <Link href="https://vit.ac.in/" target="blank">
                    <Image alt="Logo-Robot" fill src="/logo.png" />
                </Link>
            </div>
        </div>
    );
};

export default LandingHero;