import React from "react";

function MeetTeam() {
  return (
    <div className="w-full h-full text-center max-w-[1240px] mx-auto my-10">
      <h1 className="text-5xl font-IBM text-white my-10">Meet The Team</h1>

      <div className="w-full h-full md:min-h-screen grid md:grid-cols-2 place-content-center relative my-10 md:my-0 px-10 ">
        <div className="h-full w-full my-10  mx-auto md:h-full text-start text-white">
          <img
            src="/Meetthetheam.png"
            className=" h-[450px] w-[90%] object-contain "
            alt="Herobg"
          />
          <h1 className=" text-2xl font-IBM">The DAO Joan Index</h1>
          <span className=" font-IBMBold">Founder</span>
        </div>
        <div className="text-white text-start max-w-[400px] flex items-start justify-center flex-col">
          <p className="font-sans font-thin text-xl">
            Joan Westenberg is a technology journalist, writer, and creative
            director. She founded a web3 publication and agency called The
            Index, which she runs alongside MODA DAO - an organization that is
            rewriting music for creators and fans alike. Joan has been named one
            of the leading technology voices by Smart Company and was listed
            among the 100 Top Innovators by The Australian.
          </p>
          <p className="font-sans font-thin my-5 text-sm">
            Joan is the creator of Solace, a meditative NFT art collection.{" "}
          </p>
          <p className="font-sans font-thin my-5 text-sm">
            Her writing has been published in CoinTelegraph, The Next Web, The
            SF Chronicle, Wired, The AFR, The Observer, ABC, Junkee Media, SBS
            Australia TV network & Crikey, among others. Her regular work can be
            found on Substack, sharing notes on Web3 and the metaverse.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MeetTeam;
