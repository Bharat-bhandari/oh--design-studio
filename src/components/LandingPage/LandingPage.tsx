"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const LandingPage = () => {
  const container = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const hello = useRef();

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
          // markers: {
          //   startColor: "purple",
          //   endColor: "fuchsia",
          //   fontSize: "2rem",
          //   indent: 200,
          // },
        },
      });

      // gsap.to(".hello", {
      //   x: 400,
      //   duration: 4,
      // });

      const screenWidth = window.innerWidth;

      console.log("width = ", screenWidth);

      gsap.fromTo(
        ".hello",
        {
          x: screenWidth,
        },
        {
          x: 0,
          duration: 1,
          ease: "power4.out",
        }
      );
    },

    { scope: container }
  );

  // Function to define the onclick animation
  const onClickAnimation = () => {
    console.log("Inside onclick");

    const totalContentWidth = 4 * window.innerWidth;

    gsap.to(".hello", {
      x: -totalContentWidth,
      duration: 0.6,
      ease: "power2.in",
      onComplete: () => {
        router.push("/portfolio");
      },
    });
  };

  return (
    <>
      <div ref={container} id="mainContainer">
        <div className="flex h-screen hello ">
          <div className="bg-blue-400  text-3xl text-white panel h-[75vh] my-auto  w-[96vw] ml-[4vw] flex-shrink-0 ">
            Page1
            <button onClick={onClickAnimation}>Click me</button>
          </div>
          <div className="bg-green-400 text-3xl text-white panel h-[75vh] my-auto w-screen flex-shrink-0 ">
            Page2
          </div>
          <div className="bg-yellow-400 text-white text-3xl  panel h-[75vh] my-auto w-screen flex-shrink-0 ">
            Page3
          </div>
          <div className="bg-orange-400 text-3xl text-white panel h-[75vh] my-auto w-screen   flex-shrink-0 ">
            Page4
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
