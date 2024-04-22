import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import logo3 from "../assets/linkedin.svg";
import logo2 from "../assets/twitter.svg";
import logo1 from "../assets/Vector.svg";
import junaidlogo from "../assets/junaidlogo.svg";
import { MenuIcon } from "lucide-react";
import Sidebar from "./Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    AOS.init({ duration: "2000", once: true, disable: "mobile" });
  });

  return (
    <div className="h-[66px] max-sm:h-[240px] mt-7">
      <header
        data-aos="fade-down"
        className="h-full w-[1180px] mx-auto flex justify-end items-center gap-24 max-sm:gap-0 max-sm:mx-0 max-sm:justify-center"
      >
        <div className="relative right-60 max-sm:flex max-sm:justify-between max-sm:w-[1080px] max-sm:right-0 max-sm:items-center">
          <img className="max-sm:size-52 " src={junaidlogo} alt="" />

          <button onClick={toggleMenu} className="sm:hidden z-10">
            <MenuIcon color="#D9D9D9" strokeWidth={3} size={100} />
          </button>
        </div>

        {isOpen ? (
          <Sidebar />
        ) : (
          <div>
            <ul className="flex items-center gap-10 max-sm:hidden">
              <li className="hover:text-white hover:font-medium hover:scale-105 transition-all duration-200 text-[20px] font-medium text-[#A7A7A7] cursor-pointer        ">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="hover:text-white hover:font-medium hover:scale-105 transition-all duration-200 text-[20px] font-medium text-[#A7A7A7] cursor-pointer">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="hover:text-white hover:font-medium hover:scale-105 transition-all duration-200 text-[20px] font-medium text-[#A7A7A7] cursor-pointer">
                <Link to={"/techstack"}>TechStack</Link>
              </li>
              <li className="hover:text-white hover:font-medium hover:scale-105 transition-all duration-200 text-[20px] font-medium text-[#A7A7A7] cursor-pointer">
                <Link to={"/projects"}>Projects</Link>
              </li>
              <li className="hover:text-white hover:font-medium hover:scale-105 transition-all duration-200 text-[20px] font-medium text-[#A7A7A7] cursor-pointer">
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        )}

        <div className="flex gap-4 max-sm:hidden">
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
  );
};

export default Header;
