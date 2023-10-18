import React, { useEffect, useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
function Navbar() {
  const [isopen, setisopen] = useState(false);
  useEffect(() => {
    if (isopen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isopen]);
  return (
    <div className="w-full h-full p-4 py-6 relative">
      {/* LOGO */}
      <div
        className={`w-full max-w-[1340px] flex justify-between items-center mx-auto md:px-0 px-6 ${
          isopen ? "z-30 absolute top-6 left-0 right-0 m-auto px-11" : ""
        } `}
      >
        <div>
          <img
            src="/Monogram.png"
            alt="Logo"
            className="w-10 h-10 object-contain"
          />
        </div>
        <div className="text-neutral-50 hidden md:flex items-center justify-center space-x-4">
          <a href="/" className="font-IBMReg">
            Contact
          </a>
          <a href="/">
            <AiOutlineTwitter size={42} />
          </a>
          <a href="/">
            <FaDiscord size={42} />
          </a>
        </div>
        {/* Hambergur Menu */}
        <div
          onClick={() => setisopen(!isopen)}
          className={`hamburger hamburger--slider md:hidden ${
            isopen ? "is-active after:bg-black bg-black before:bg-black " : ""
          } `}
        >
          <div className="hamburger-box">
            <div
              className={`hamburger-inner ${
                isopen ? "after:bg-black bg-black" : "after:bg-white bg-white"
              }`}
            ></div>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-screen ${
          isopen ? "bg-white block" : "hidden"
        }  absolute top-0 left-0 z-20 duration-500`}
      >
        <div className="text-neutral-50  h-full py-10  flex items-center justify-between flex-col space-x-4">
          <div>{""}</div>
          <div>
            <a href="/" className="font-IBMReg text-4xl text-black select-none">
              Contact
            </a>
          </div>
          <div className="flex items-center justify-center space-x-2 text-black">
            <a href="/">
              <AiOutlineTwitter size={32} />
            </a>
            <a href="/">
              <FaDiscord size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
