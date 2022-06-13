import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = gsap.to(containerRef.current, {
      translateY: "-20vh",
      scrollTrigger: {
        start: "top top",
        end: "+=100%",
        scrub: true,
      },
    });

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col sticky top-0 -z-10 h-screen w-full bg-blue-400 text-white justify-center items-start"
    >
      <div className="container mx-auto max-w-10xl tracking-wider">
        <div className="flex flex-col gap-12 items-center">
          <h1 className="text-5xl w-fit leading-[5rem] text-center">
            Hi, my name is
            <br />
            <span className="font-bold text-8xl">Steven Stavrakis</span>
            <br />
            and I help businesses with
          </h1>
          <div>
            <h2
              className="text-8xl font-black text-transparent text-center"
              style={{
                WebkitTextStroke: "2px white",
              }}
            >
              design.
            </h2>
            <h2
              className="text-8xl font-black text-transparent text-center"
              style={{
                WebkitTextStroke: "2px white",
              }}
            >
              development.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
