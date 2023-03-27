import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeWriterEffect() {
  return (
    <Typewriter
      options={{
        strings: [
          "Wed Developer",
          "Mobile Developer",
          "UI Designer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};