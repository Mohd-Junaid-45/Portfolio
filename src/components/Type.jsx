import React from "react";
import { TypeAnimation } from "react-type-animation";

const Type = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "MOHD JUNAID",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "WEB DEVELOPER",
        1000,
      ]}
      wrapper="span"
      speed={1}
      //   style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default Type;
