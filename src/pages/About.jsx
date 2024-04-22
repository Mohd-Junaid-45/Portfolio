import React, { useEffect } from "react";
import logo3 from "../assets/linkedin.svg";
import logo2 from "../assets/twitter.svg";
import logo1 from "../assets/Vector.svg";
import junaidlogo from "../assets/junaidlogo.svg";
import { Building, CalendarDays, MapPin, Mail, Phone } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: "2000",
      once: true,
      disable: 'mobile'
    });
  });

  return (
    <div className="h-full w-[1180px] mx-auto justify-center items-center mt-28">
      <div data-aos="fade-up">
        <h1 className="font-bold text-[48px] text-[#CCCCCC] max-sm:text-[100px] max-sm:text-center">
          About
        </h1>
        <h1 className="text-[18px] text-[#A7A7A7] text-left max-sm:text-[45px] max-sm:text-center max-sm:mx-28 ">
          I'm a passionate and results-driven front-end developer with a strong
          focus on ReactJS. With 6 months of hands-on experience, I've had the
          opportunity to work on diverse projects, honing my skills in building
          modern and efficient web applications.
        </h1>
      </div>

      <div data-aos="fade-left" className="max-sm:mx-28 max-sm:mt-36">
        <h1 className="font-bold text-[48px] text-[#CCCCCC] mt-14 mb-6 max-sm:text-[100px] max-sm:text-center">
          Work Experience
        </h1>
        <div className="flex justify-between items-center">
          <div className="text-[20px] text-[#A7A7A7] text-left max-sm:text-[40px] max-sm:text-center">
            ReactJS trainee
          </div>
          <div className="bg-[#D7FFE0] text-[9px] font-semibold text-[#018C0F] rounded-full px-4 py-1 max-sm:text-[20px] max-sm:px-8 max-sm:py-2   ">
            Full Time
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center text-[20px] my-1 text-[#A7A7A7] text-left max-sm:text-[80px] max-sm:text-center">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1 text-[12px] font-medium max-sm:text-[20px]">
                <Building size={12} className="max-sm:size-[20px]" /> ThinkNext
                Pvt. Ltd.
              </div>
              <div className="flex items-center gap-1 text-[12px] font-medium max-sm:text-[20px]">
                <MapPin size={12} className="max-sm:size-[20px]" /> Mohali
              </div>
            </div>
          </div>
          <div className="text-[12px] font-medium flex items-center gap-1 text-[#A7A7A7] max-sm:text-[20px]  ">
            <CalendarDays size={12} className="max-sm:size-[20px]" /> May 2023 -
            oct 2023
          </div>
        </div>
        <div className="h-[1px] bg-white w-[1180px] max-sm:w-[950px] opacity-50 mx-auto mt-3"></div>
      </div>

      <div data-aos="fade-right" className="max-sm:mx-28 max-sm:mt-28">
        <h1 className="font-bold text-[48px] text-[#CCCCCC] mt-14 mb-6 max-sm:text-[100px] max-sm:text-center">
          Education
        </h1>
        <div className="flex justify-between items-center">
          <div className="text-[20px] text-[#A7A7A7] text-left max-sm:text-[40px] max-sm:text-center">
            Intermediate
          </div>
          <div className="bg-[#D7FFE0] text-[9px] font-semibold text-[#018C0F] rounded-full px-4 py-1  max-sm:text-[20px] max-sm:px-8 max-sm:py-2">
            Full Time
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center text-[20px] my-1 text-[#A7A7A7] text-left max-sm:text-[80px] max-sm:text-center">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1 text-[12px] font-medium max-sm:text-[20px]">
                <Building size={12} className="max-sm:size-[20px]" /> Islamia
                Inter College
              </div>
            </div>
          </div>
          <div className="text-[12px] font-medium flex items-center gap-1 text-[#A7A7A7] max-sm:text-[20px]  ">
            <CalendarDays size={12} className="max-sm:size-[20px]" /> April 2018
            - March 2021
          </div>
        </div>
        <div className="h-[1px] bg-white w-[1180px] max-sm:w-[950px] opacity-50 mx-auto mt-3"></div>
      </div>

      <div className="h-[66px] mt-60">
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

export default About;
