import React from "react";
import { Link } from "lucide-react";
import { Github } from "lucide-react";

const Card = ({ info }) => {
  return (
    <div className="h-[550px] w-[350px] bg-[#363636] rounded-2xl drop-shadow-lg space-y-4 max-sm:space-y-4 max-sm:rounded-[90px] max-sm:h-[1300px] max-sm:w-[900px]">
      <div className="">
        <img
          className="max-sm:h-[625px] max-sm:rounded-t-[90px]"
          src={info.image}
          alt=""
        />
      </div>
      <div className="space-y-3 max-sm:space-y-3">
        <h1 className="font-medium text-[28px] text-[#CCCCCC] text-left mx-5   max-sm:text-[80px] max-sm:text-left max-sm:mx-10">
          {info.title}
        </h1>
        <h1 className="font-light text-[18px] text-[#CCCCCC] text-left mx-5  max-sm:text-[45px] max-sm:text-left max-sm:mx-10">
          {info.summary}
        </h1>
        <h1 className="font-normal text-[18px] text-[#CCCCCC] mx-5    max-sm:text-[40px] max-sm:text-left max-sm:mx-10">
          Tech stack :
          <span className="font-extralight text-[15px] text-[#cccccc] max-sm:text-[35px] max-sm:text-left max-sm:mx-10">
            {info.tech}
          </span>
        </h1>
      </div>
      <div className="flex gap-16 mx-5  max-sm:mt-12 max-sm:gap-[100px] max-sm:flex max-sm:justify-between max-sm:mx-10">
        <div className="flex max-sm:flex max-sm:items-center max-sm:gap-2">
          <Link className="max-sm:size-10" />
          <a
            className="underline font-light max-sm:text-[45px]"
            href="https://blog-web-react.vercel.app/"
          >
            Live preview
          </a>
        </div>
        <div className="flex max-sm:flex max-sm:items-center max-sm:gap-2">
          <Github className="max-sm:size-10" />
          <a
            className="underline font-light max-sm:text-[45px]"
            href="https://github.com/Mohd-Junaid-45/blog"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
