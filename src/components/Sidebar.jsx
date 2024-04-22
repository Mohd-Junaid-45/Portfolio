import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Sidebar = () => {
  useEffect(() => {
    AOS.init({ duration: "2000", once: true, disable: "mobile" });
  });

  return (
    <div
      data-aos="fade-right"
      className="w-[1180px] h-[500px] absolute top-12 bg-[#191919]"
    >
      <ul className="flex flex-col text-left mx-10">
        <li className="hover:text-white border border-[#191919] transition-all duration-200 text-[60px] font-medium text-[#A7A7A7] cursor-pointer">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="hover:text-white border border-[#191919] transition-all duration-200 text-[60px] font-medium text-[#A7A7A7] cursor-pointer">
          <Link to={"/about"}>About</Link>
        </li>
        <li className="hover:text-white border border-[#191919] transition-all duration-200 text-[60px] font-medium text-[#A7A7A7] cursor-pointer">
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li className="hover:text-white border border-[#191919] transition-all duration-200 text-[60px] font-medium text-[#A7A7A7] cursor-pointer">
          <Link to={"/projects"}>Projects</Link>
        </li>
        <li className="hover:text-white border border-[#191919]  transition-all duration-200 text-[60px] font-medium text-[#A7A7A7] cursor-pointer">
          <Link to={"/techstack"}>TechStack</Link>
        </li>
        <div className="w-[1100px] h-[2px] bg-white my-4 "></div>
      </ul>
    </div>
  );
};

export default Sidebar;
