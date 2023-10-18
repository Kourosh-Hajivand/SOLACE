import React from "react";

function About() {
  return (
    <div className="w-full h-full md:min-h-screen grid md:grid-cols-2 relative my-10 md:my-0 ">
      <div className="order-1 md:order-2 h-[350px] md:h-full relative">
        <img
          src="/About.png"
          className="w-full h-full object-cover "
          alt="Herobg"
        />
        <div className="w-full h-full bg-black/60 absolute top-0 left-0 z-10"></div>

        <img
          src="/aboutstatic.png"
          className="w-[30%] max-w-[150px] h-[55%] md:hidden object-fill absolute m-auto left-0 right-0 -bottom-20 z-20 rounded-t-full"
          alt="about"
        />
      </div>

      <div className="order-2 my-14 md:my-0 h-full w-full flex flex-col items-center justify-center py-10">
        <h1 className="md:text-2xl text-l  text-white font-IBM">
          An NFT created for mindfulness.
        </h1>

        <div className="w-[25%] h-[55%]  max-w-[300px] max-h-[350px] mt-20 mb-10 relative hidden md:block">
          <img
            src="/aboutstatic.png"
            className="w-full h-full object-fill  rounded-t-full"
            alt="about"
          />
          <img
            src="/Monogram.png"
            className="w-[90%] h-[90%] object-contain absolute -top-14 -left-10"
            alt="logo"
          />
        </div>

        <div className="w-3/4 flex items-center justify-center flex-col">
          <p className="text-white font-IBMLight w-[80% max-w-[250px] my-5 text-center">
            Solace. An NFT designed to be used as a meditation tool. Each piece
            is a unique portal into a new world. Designed to curate moments of
            silence. Created by crypto artist and writer the DAO Joan Index.
          </p>
          <button className="w-full uppercase max-w-[300px] py-4 border border-white text-white hover:bg-white hover:text-black">
            Opensea
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
