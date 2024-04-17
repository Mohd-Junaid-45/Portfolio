import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-full w-[1080px] justify-center items-center mx-auto mt-28 text-center underline">
      {" "}
      <Link className="text-[50px]" to={"/"}>
        Go to Home , Page not found
      </Link>{" "}
    </div>
  );
};

export default NotFound;
