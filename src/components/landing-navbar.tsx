"use client";

import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/utils"

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const LandingNavbar = () => {
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between text-white">
      <Link href="/" className="flex items-center">
        <div className="relative h-12 w-12 sm:h-16 sm:w-16 mr-4">
          
        </div>
        <h1
          className={cn(
            "text-md sm:text-2xl font-bold text-white",
            font.className
          )}
        >
          Community Central
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={"/community"}>
          <button
            className="h-10 px-4 py-2 rounded-full text-sm sm:text-lg get-started-btn drop-shadow-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-0"
          >
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;