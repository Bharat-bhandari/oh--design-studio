"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const LandingPage = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const sections: HTMLDivElement[] = gsap.utils.toArray(".panel");

      const amountToScroll = 100 * (sections.length - 1);

      console.log(amountToScroll);

      gsap.to(sections, {
        xPercent: -amountToScroll, // amount to scroll
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          // snap: 1 / (sections.length - 1),
          start: "center center",
          scrub: 1,
          end: () => {
            const mainContainer =
              document.querySelector<HTMLElement>("#mainContainer");
            return mainContainer ? `+=${mainContainer.offsetWidth}` : "+=0";
          },
          markers: {
            startColor: "purple",
            endColor: "fuchsia",
            fontSize: "2rem",
            indent: 200,
          },
        },
      });
    },
    { scope: container }
  );

  return (
    <>
      <div ref={container} id="mainContainer" className="flex h-screen  ">
        <div className="bg-blue-400  text-3xl text-white panel  w-screen flex-shrink-0 ">
          Page1
        </div>
        <div className="bg-green-400 text-3xl text-white panel w-screen flex-shrink-0 ">
          Page2
        </div>
        <div className="bg-yellow-400 text-3xl text-white panel w-screen flex-shrink-0 ">
          Page3
        </div>
        <div className="bg-orange-400 text-3xl text-white panel w-screen   flex-shrink-0 ">
          Page4
        </div>
      </div>
    </>
  );
};

export default LandingPage;
