import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className="relative w-28 h-28 group"
        >
          {/* Tooltip */}
          <div
            className="
              absolute -bottom-8 left-1/2 -translate-x-1/2
              px-2 py-1 rounded bg-black/80 text-white text-xs
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300 pointer-events-none
              whitespace-nowrap
            "
          >
            {technology.name}
          </div>

          {/* 3D Ball */}
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
