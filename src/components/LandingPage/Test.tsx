
"use client"


import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  const container = useRef();

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".panel");

      // console.log(section);

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          // snap: 1 / (sections.length - 1),
          end: () =>
            "+=" + document.querySelector("#mainContainer").offsetWidth,
        },
      });
    },
    { scope: container }
  );

  return (
    <>
      <section
        ref={container}
        id="mainContainer"
        className="flex h-screen overflow-x-hidden"
      >
        {/* Added overflow-x-auto */}
        <div className="flex items-center justify-center flex-shrink-0 w-full text-5xl text-white bg-green-400 panel">
          ONE
        </div>
        <div className="flex items-center justify-center flex-shrink-0 w-full text-5xl text-white bg-yellow-400 panel">
          TWO
        </div>
        <div className="flex items-center justify-center flex-shrink-0 w-full text-5xl text-white bg-blue-400 panel">
          THREE
        </div>
        <div className="flex items-center justify-center flex-shrink-0 w-full text-5xl text-white bg-pink-400 panel">
          FOUR
        </div>
      </section>
    </>
  );
};


export default Test