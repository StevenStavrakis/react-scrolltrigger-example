import React, { useRef } from "react";
import Work from "./Work";

const Works: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-full h-[300vh] relative">
      <div className="grid md:grid-cols-2 grid-cols-1 w-full h-screen sticky top-0 -z-10">
        <div className="bg-white flex justify-center items-center sm:h-[30vh] md:h-full"></div>
        <div className="bg-black flex justify-center items-center sm:h-[70vh] md:h-full"></div>
        <Work parentContainer={containerRef} order={0} text={"Project one"} />
        <Work parentContainer={containerRef} order={1} text={"Project two"} />
        <Work
          parentContainer={containerRef}
          order={2}
          text={"Project three"}
          last
        />
      </div>
    </div>
  );
};

export default Works;
