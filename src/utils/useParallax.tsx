import React, { useLayoutEffect } from "react";
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const vh = (amount: number) => {
    return (amount * (window.innerHeight / 100))
}

const useParallax = (el: React.RefObject<HTMLDivElement>, amount: number) => {

    useLayoutEffect(() => {
        const amountInVh = vh(amount)
        const { current: element } = el;

        const tl = gsap.timeline();

        const paraFrom = gsap.from(element, {
            translateY: `${amountInVh}`,
            ease: "none"
        })

        const paraTo = gsap.to(element, {
            translateY: `-${amountInVh}`,
            ease: "none"
        })

        tl.add(paraFrom);
        tl.add(paraTo)

        const scroller = ScrollTrigger.create({
            trigger: element,
            start: `top-=${amountInVh} bottom`,
            end: `bottom-=${amountInVh} top`,
            animation: tl,
            scrub: 0.3
        })

        return () => {
            scroller.kill()
        }
    }, [])
}

export {
    useParallax
}