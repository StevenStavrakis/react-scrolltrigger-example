import React, { RefObject, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  parentContainer: RefObject<HTMLDivElement>;
  order: number;
  last?: boolean;
  text: string;
}

const Work: React.FC<Props> = ({ parentContainer, order, last, text }) => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const start = `top ${
      0 + -window.innerHeight * order + window.innerHeight / 2
    }`;
    const end = `top ${
      -20 + -window.innerHeight * (order + 1) + window.innerHeight / 2
    }`;

    console.log(start);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentContainer.current,
        start,
        end,
        scrub: 0.4,
      },
    });

    tl.addLabel("in", 0);
    tl.addLabel("out", 10);

    gsap.set([imageRef.current, textRef.current], {
      autoAlpha: 1,
    });

    const imageMove = gsap.fromTo(
      imageRef.current,
      {
        translateY: "5%",
      },
      {
        translateY: "-3%",
        duration: 12,
      }
    );

    tl.add(imageMove, "in");

    const imageIn = gsap.from(imageRef.current, {
      autoAlpha: 0,
      duration: 2,
      ease: "power3.inOut",
    });
    const textIn = gsap.from(textRef.current, {
      autoAlpha: 0,
      translateY: "20%",
      duration: 2,
    });

    if (!last) {
      const imageOut = gsap.to(imageRef.current, {
        autoAlpha: 0,
        duration: 2,
      });

      const textOut = gsap.to(textRef.current, {
        autoAlpha: 0,
        translateY: "-10%",
        duration: 2,
      });
      tl.add(imageOut, "out");
      tl.add(textOut, "out");
    }

    tl.add(imageIn, "in");
    tl.add(textIn, "in");
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 md:h-full h-screen w-full absolute top-0"
    >
      <div className="flex justify-center items-center sm:h-[30vh] md:h-full">
        <h2 ref={textRef} className="text-3xl">
          {text}
        </h2>
      </div>
      <div className="flex justify-center items-center sm:h-[70vh] sm:items-start md:items-center md:h-full py-24">
        <img
          ref={imageRef}
          alt="its random"
          src="https://picsum.photos/400/800"
          width="400"
          height="800"
        />
      </div>
    </div>
  );
};

export default Work;
