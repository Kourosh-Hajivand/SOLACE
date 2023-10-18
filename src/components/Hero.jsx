import React from "react";

function Hero() {
  return (
    <div className="w-full h-full md:min-h-screen grid md:grid-cols-2 relative my-10 md:my-0 ">
      <div className="order-2 my-10 md:my-0">
        <div className="mx-auto order-2 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-fit flex items-center justify-center flex-col">
          <h1 className="text-6xl md:text-9xl xl:text-[15rem] text-white font-extrabold select-none">
            SOLACE.
          </h1>
          <button className="uppercase w-full border mx-auto border-white max-w-[400px] text-white py-4 my-2 lg:w-3/4 lg:px-10 lg:py-6 font-IBMReg hover:bg-white hover:text-black duration-300">
            Join Discord
          </button>
        </div>
      </div>
      <div className="order-1 md:order-2 h-[350px] md:h-full">
        <img
          src="/Herogif.gif"
          className="w-full h-full object-cover object-top "
          alt="Herobg"
        />
      </div>
    </div>
  );
}

export default Hero;
