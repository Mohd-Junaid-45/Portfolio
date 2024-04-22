import React, { useEffect } from "react";
import banner from "../assets/banner.svg";
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
import Card from "../components/Card";
import logo3 from "../assets/linkedin.svg";
import logo2 from "../assets/twitter.svg";
import logo1 from "../assets/Vector.svg";
import junaidlogo from "../assets/junaidlogo.svg";
import { projectInfo } from "../Data";
import { Phone, Mail } from "lucide-react";
import Type from "../components/Type";
import AOS from "aos";
import "aos/dist/aos.css";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: "2000",
      once: true,
      disable: "mobile",
    });
  });

  return (
    <div className="h-full w-[1180px] mx-auto justify-center items-center mt-28">
      <div
        data-aos="fade-right"
        className="flex justify-between items-center max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-24 max-sm:justify-center"
      >
        <div className="max-sm:text-center">
          <h1 className="font-bold text-[58px] text-[#D9D9D9] max-sm:text-[100px]">
            Hi&#128075;,
          </h1>
          <h1 className="font-bold text-[58px] text-[#D9D9D9] max-sm:text-[100px]">
            My name is
          </h1>
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            <h1 className="text-[58px] font-bold max-sm:text-[100px]">
              <Type />
            </h1>
          </div>
          <h1 className="font-bold text-[58px] text-[#D9D9D9] max-sm:text-[100px]">
            I build things for web...
          </h1>
        </div>
        <img className="max-sm:size-[800px]" src={banner} alt="" />
      </div>
      <div className="mx-auto flex flex-col justify-center items-center mt-60">
        <div
          data-aos="zoom-out"
          className="flex flex-col justify-center items-center mx-auto"
        >
          <h1 className="font-bold text-[48px] text-[#CCCCCC] max-sm:text-[100px]">
            My Tech Stack
          </h1>
          <h1 className="text-[32px] text-[#A7A7A7] max-sm:text-[80px] max-sm:text-center">
            Technologies I've been working with recently
          </h1>
        </div>

        <div
          data-aos="fade-left"
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
      </div>

      <div
        data-aos="zoom-out"
        className="flex flex-col justify-center items-center mt-60"
      >
        <h1 className="font-bold text-[48px] text-[#CCCCCC] max-sm:text-[100px]">
          Projects
        </h1>
        <h1 className="text-[32px] text-[#A7A7A7] max-sm:text-[80px]">
          Things I've built so far
        </h1>
      </div>
      <div
        data-aos="fade-right"
        className="flex-wrap flex gap-x-8 gap-y-12 max-sm:gap-28 mt-24 justify-center"
      >
        {projectInfo.map((info) => {
          return <Card key={info.id} info={info} />;
        })}
      </div>

      <div className="h-[66px] mt-28">
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
  );
};

export default Homepage;
