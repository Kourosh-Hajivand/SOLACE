import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import MeetTeam from "../components/MeetTeam";
import Navbar from "../components/Navbar";
import Videopart from "../components/Videopart";

function Main() {
  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <MeetTeam />
      <Videopart src="/MOSHED-2023-2-10-12-43-29.webm" />
      <div className="w-full flex justify-end px-7 py-10 max-w-[1290px]">
        <h1 className="text-4xl md:text-7xl  text-white font-extrabold">
          SOLACE.
        </h1>
      </div>
    </div>
  );
}

export default Main;
