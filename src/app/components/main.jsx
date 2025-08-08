"use client"

import {useState} from "react";

const Main = ()=> {

    const [hovered, setHovered] = useState(false);

    return (
        <div
          className="
            relative min-h-screen bg-[#1A1A1A] text-white
            shadow-md
            flex flex-col items-center justify-center text-center gap-10 px-6 py-12
            lg:flex-row lg:items-center lg:justify-between lg:text-left lg:gap-0 lg:px-16
          "
        >
            {/* Floating Squares - show only on large to avoid overlap on small screens */}
            <div className="hidden lg:block absolute w-12 h-12 bg-green-500 top-1/5 left-10 rounded-sm"></div>
            <div className="hidden lg:block absolute w-12 h-12 bg-yellow-600 top-1/4 left-1/2 rounded-sm"></div>
            <div className="hidden lg:block absolute w-12 h-12 bg-pink-800 bottom-50 right-1/3 rounded-full"></div>

            {/* Left Content */}
            <div
              className="
                max-w-prose lg:max-w-xl
                lg:ml-35
              "
            >
                <p className="text-sm lg:text-md"><code>HI THERE 👋 I'M</code></p>
                <h1 className="text-3xl lg:text-5xl font-bold leading-tight mt-2">
                  <code>Vinicius Berger</code>
                </h1>
                <p className="text-cyan-400 mt-2">
                  <code>FULLSTACK DEVELOPER </code>👩🏽‍💻
                </p>
                <p className="text-sm lg:text-md mt-2 cursor-default">
                  <code>I'm a professional fullstack developer based in Calgary.</code>
                </p>
                <button
                  onClick={()=> window.location.href = "https://www.linkedin.com/in/marcos-vinicius-berger-gilles/"}
                  className="
                    mt-4 px-6 py-2 bg-emerald-400 text-black font-semibold rounded-full hover:bg-emerald-300
                  "
                >
                  Talk to me
                </button>
            </div>

            {/* Right Avatar */}
            <div className="lg:mr-25">
                <img
                  src={hovered ? "/images/avatar_hover.png" : "/images/avatar.png"}
                  alt="Smiling person facing forward, representing Marcos Vinicius Berger Gilles, fullstack developer. The background is a dark-themed portfolio page with floating colored squares and welcoming text: HI THERE I AM, Marcos Vinicius Berger Gilles, FULLSTACK DEVELOPER, I am a professional fullstack developer with based in Calgary. The mood is friendly and professional."
                  className="w-48 mx-auto lg:w-76 lg:mx-0"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                />
            </div>
        </div>
    )
}

export default Main;
