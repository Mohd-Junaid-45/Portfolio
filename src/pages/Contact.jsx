import React, { useEffect } from "react";
import { Mail, Phone } from "lucide-react";
import logo3 from "../assets/linkedin.svg";
import logo2 from "../assets/twitter.svg";
import logo1 from "../assets/Vector.svg";
import junaidlogo from "../assets/junaidlogo.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
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
        data-aos="flip-down"
        className="flex flex-col justify-center items-center"
      >
        <div className="font-bold text-[58px] text-white">
          For any questions please mail us:
        </div>
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          <h1 className="text-[58px] font-bold max-sm:text-[70px]">
            junaidd@4510@gmail.com
          </h1>
        </div>
        <div className="font-bold text-[58px] text-white">
          Or a call on this number:
        </div>
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          <h1 className="text-[58px] font-bold max-sm:text-[70px]">
            +91 7520071890
          </h1>
        </div>
      </div>

      <div className="h-[66px] mt-52 max-sm:mt-[1000px]">
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
      <div className="py-3 flex justify-center items-center ">
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          <h1 className="text-[18px] font-normal">
            &copy; Designed and built by Junaid
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
