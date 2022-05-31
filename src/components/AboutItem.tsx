import React, { useEffect, useRef } from "react"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
    children: React.ReactNode,
    first?: boolean,
    last?: boolean
}

const AboutItem: React.FC<Props> = ({ children, first = false, last = false }) => {

    const containerRef = useRef(null);

    useEffect(() => {

        let toggleActions;

        toggleActions = "play reverse play reverse";

        if (first) {
            toggleActions = "none play reverse none"
        }

        if (last) {
            toggleActions = "play none none reverse"
        }

        const anim = gsap.to(containerRef.current, {
            autoAlpha: 1,
            duration: .3,
            ease: "power1.inOut",
            runBackwards: first,
            immediateRender: true,
            scrollTrigger: {
                toggleActions,
                trigger: containerRef.current,
                start: "top 45%",
                end: "bottom 45%"
            }
        });

        return () => {
            anim.kill()
        }
    }, [])

    return (
        <div ref={containerRef} className="relative flex opacity-20">
            <h2 className="text-6xl leading-tight font-bold">
                {children}
            </h2>
        </div>
    )
};

export default AboutItem;
