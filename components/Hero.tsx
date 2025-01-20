"use client"

import Code from "./Code";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
    const code1Ref = useRef<HTMLDivElement>(null);
    const code2Ref = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        // Setup hover animations for both Code components
        [code1Ref.current, code2Ref.current].forEach(element => {
            if (!element) return; // Skip if element is null

            element.addEventListener('mouseenter', () => {
                gsap.to(element, {
                    y: -10, // Move up by 10 pixels
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            element.addEventListener('mouseleave', () => {
                gsap.to(element, {
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Add button animation
        const button = buttonRef.current;
        if (!button) return;

        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                y: -5,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    }, []);

    return (
        <div className="w-full flex justify-center items-center w-full overflow-x-hidden scrollbar-hide h-screen relative">
            <div className="max-w-6xl px-9 py-[46px] grid pt-60 md:pt-40 grid-cols-1 md:grid-cols-2">

            <div className=" h-full space-y-4 flex flex-col  relative z-10">
                <h1 className="flex text-white text-5xl font-bold"> Tech <br/>   Transforms Ideas <br/> into Digital Experiences</h1>
                <p>Your partner in modern software development. We craft custom websites, build intuitive mobile apps, and deliver cutting-edge solutions tailored to your vision.</p>
                <div className="flex flex-row">
                  <button
                    ref={buttonRef}
                    className="relative inline-flex items-center justify-center p-1  mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-md bg-gradient-to-br from-purple-600 to-blue-500"
                  >
                    <span className="relative px-5 py-2.5">
                      Purple
                    </span>
                  </button>

                  <button
                    ref={buttonRef}
                    className="relative inline-flex items-center justify-center p-1 bg-black hover:bg-zinc-900  mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-md bg-gradient-to-br from-black-600 to-blue-500"
                  >
                    <span className="relative px-5 py-2.5">
                      Purple
                    </span>
                  </button>
                </div>
              </div>

              <div className=" flex flex-row">

                <div className="opacity-65" ref={code1Ref}>
                  <Code />
                </div>
                <div className="mt-10 -ml-[26rem]" ref={code2Ref}>
                  <Code />
                </div>
              </div>


          </div>
        </div>
    )
}

 export default Hero