import LandingHero from "@/components/landing-hero";
import LandingNavbar from "@/components/landing-navbar";
import React from "react";

const Home: React.FC = () => {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full"></div>
      <div className="h-full">
        <LandingNavbar />
        <LandingHero />
      </div>
    </main >
  )
};

export default Home;
