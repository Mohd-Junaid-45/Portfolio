import React, { useEffect } from "react";
import html from "../assets/logos/html.svg";
import css from "../assets/logos/css.svg";
import js from "../assets/logos/js.svg";
import react from "../assets/logos/react.svg";
import redux from "../assets/logos/redux.svg";
import bootstrap from "../assets/logos/bootstrap.svg";
import tailwind from "../assets/logos/tailwind.svg";
import reactrouter from "../assets/logos/reactrouter.svg";
import figma from "../assets/logos/figma.svg";
import firebase from "../assets/logos/firebase.svg";
import vs from "../assets/logos/vs.svg";
import github from "../assets/logos/github.svg";
import { Mail, Phone } from "lucide-react";
import logo3 from "../assets/linkedin.svg";
import logo2 from "../assets/twitter.svg";
import logo1 from "../assets/Vector.svg";
import junaidlogo from "../assets/junaidlogo.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const TechStack = () => {
  useEffect(() => {
    AOS.init({
      duration: "2000",
      once: true,
      disable: "mobile",
    });
  });

  return (
    <>
      <div className="mx-auto w-[1180px] mt-28">
        <div data-aos="fade-right">
          <h1 className="font-bold text-[48px] text-[#CCCCCC] max-sm:text-[100px] max-sm:text-center">
            My Tech Stack
          </h1>
          <h1 className="text-[32px] text-[#A7A7A7] text-left max-sm:text-[80px] max-sm:text-center">
            Technologies I've been working with recently
          </h1>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-wrap justify-center items-center gap-20 mt-32 max-sm:gap-40"
        >
          <img
            src={html}
            alt="HTML"
            className="hover:scale-110 transition-all duration-200 cursor-pointer max-sm:size-[380px]"
          />
          <img
            src={css}
            alt="CSS"
            className="hover:scale-110 transition-all duration-200 cursor-pointer max-sm:size-[380px]"
          />
          <img
            src={js}
            alt="JAVASCRIPT"
            className="hover:scale-110 transition-all duration-200 cursor-pointer max-sm:size-[380px]"
          />
          <img
            src={react}
            alt="REACT"
            className="hover:scale-110 transition-all duration-200 cursor-pointer max-sm:size-[380px]"
          />
          <img
            src={redux}
            alt="REDUX"
            className="hover:scale-110 transition-all duration-200 cursor-pointer max-sm:size-[380px]"
          />
          <img
            src={bootstrap}
            alt="BOOTSTRAP"
            className="hover:scale-110 transition-all duration-200 cursor-pointer max-sm:size-[380px]"
          />

          <img
            src={tailwind}
            alt="TAILWIND"
            className="hover:scale-110 transition-all duration-200 cursor-pointer max-sm:size-[380px]"
          />
          <img
            src={reactrouter}
            alt="SASS"
            className="hover:scale-110 transition-all duration-200 cursor-pointer max-sm:size-[380px]"
          />
          <img
            src={figma}
            alt="GIT"
            className="hover:scale-110 transition-all duration-200 cursor-pointer max-sm:size-[380px]"
          />
          <img
            src={firebase}
            alt="GREEN"
            className="hover:scale-110 transition-all duration-200 cursor-pointer max-sm:size-[380px]"
          />
          <img
            src={vs}
            alt="VS"
            className="hover:scale-110 transition-all duration-200 cursor-pointer max-sm:size-[380px]"
          />
          <img
            src={github}
            alt="GITHUB"
            className="hover:scale-110 transition-all duration-200 cursor-pointer max-sm:size-[380px]"
          />
        </div>
        <div className="h-[66px] mt-40">
          <header className="h-full w-[1180px] mx-auto flex justify-evenly items-center gap-24">
            <div className="">
              <img src={junaidlogo} alt="" />
            </div>

            <div className="flex gap-12">
              <h1 className="text-[18px] text-[#A7A7A7] hover:text-white hover:scale-105 transition-all duration-200 cursor-pointer flex items-center gap-1">
                <Phone size={20} />
                <h1>+91 7520071890</h1>
              </h1>
              <h1 className="text-[18px] text-[#A7A7A7] hover:text-white hover:scale-105 transition-all duration-200 cursor-pointer flex items-center gap-1">
                <Mail size={20} />
                <h1>junaidd4510@gmail.com</h1>
              </h1>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/Mohd-Junaid-45">
                <img
                  className="hover:scale-125 transition-all duration-200 cursor-pointer"
                  src={logo1}
                  alt=""
                />
              </a>
              <a href="https://x.com/Junaidd45?t=gCec6TsLkYq8_Q-weJ-cBA&s=09">
                <img
                  className="hover:scale-125 transition-all duration-200 cursor-pointer"
                  src={logo2}
                  alt=""
                />
              </a>

              <a href="https://www.linkedin.com/in/mohd-junaid-421332284/">
                <img
                  className="hover:scale-125 transition-all duration-200 cursor-pointer"
                  src={logo3}
                  alt=""
                />
              </a>
            </div>
          </header>
        </div>
        <div className="w-[1180px] h-[1px] bg-[#42446E] my-4 "></div>
        <div className="py-3 flex justify-center items-center pb-6">
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            <h1 className="text-[18px] font-normal">
              &copy; Designed and built by Junaid
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
