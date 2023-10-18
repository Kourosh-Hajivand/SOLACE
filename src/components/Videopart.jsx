import React from "react";

function Videopart(props) {
  return (
    <div
      className="w-full max-w-[1340px] flex
     flex-col items-center justify-center mx-auto"
    >
      <video controls className="w-full max-w-[720px]">
        <source src={props.src} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <button className="w-full mx-auto max-w-[400px] py-4 border border-white hover:bg-white hover:text-black text-white">
        Discover more: visions
      </button>
    </div>
  );
}

export default Videopart;
