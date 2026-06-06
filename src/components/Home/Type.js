import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Blockchain Developer",
          "Node.js Developer",
          "Backend Engineer",
          "Solutions Architect",
          "Smart Contract Auditing",
          "DevOps Engineer",
          "Freelancer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        delay: 50
      }}
    />
  );
}

export default Type;
