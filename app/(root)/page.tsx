"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Technologies from "@/components/Technologies";
import Feedback from "@/components/Feedback";
import StepByStep from "@/components/StepByStep";
import Path from "@/components/Path";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = sectionsRef.current?.children;

    if (sections) {
      gsap.utils.toArray(sections).forEach((section: any, index) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }
  }, []);

  return (
    <div ref={sectionsRef} className="scroll-smooth text-white">
      <Hero />
      <About />
      {/* Blurred Background Effect */}
      <div className="absolute w-full h-[500px] rounded-full bg-purple-800/30 blur-[148px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      <WhyUs />
      <Feedback />
      {/* <Technologies/> */}
      {/* <StepByStep/> */}
      <Path />
    </div>
  );
}

