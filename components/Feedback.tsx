"use client";

import { useState, useRef, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FeedbackCard from "./FeedbackCard";

interface BentoTiltProps {
  children: ReactNode;
  className?: string;
}

export const BentoTilt = ({ children, className = "" }: BentoTiltProps) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    requestAnimationFrame(() => {
      setTransformStyle(
        `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`
      );
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={`${className} transition-transform duration-200 ease-out`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const Features = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust scroll distance
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="pb-4 bg-[#000000] relative h-screen overflow-hidden">
      <div className="container max-w-none mx-auto relative px-5">
        {/* Section Header */}
        <div className="pt-24 md:px-[200px] sm:px-[100px] px-auto pb-14">
          <p className="font-circular-web text-lg text-blue-50">Into the Metagame Layer</p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.
          </p>
        </div>

        {/* Scrollable Container */}
        <div className="relative ">
          <div
            ref={scrollRef}
            className="flex space-x-4 md:px-[200px] sm:px-[100px] px-auto overflow-x-auto no-scrollbar scrollbar-hide"
            style={{
              scrollBehavior: "smooth",
              width: "100%",
              flexWrap: "nowrap",
            }}
          >
            {Array.from({ length: 7 }).map((_, i) => (
              <BentoTilt
                key={i}
                className=" min-w-[230px] max-w-[280px] h-[309px] flex flex-col justify-between bg-white/5 shadow-xl backdrop-blur-xl bg-gradient-to-r from-white/5 to-black/20 border border-white/15 p-5 rounded-lg overflow-hidden transition-transform duration-100 ease-out"
              >
                <FeedbackCard />
              </BentoTilt>
            ))}
          </div>

      </div>
      <div className="flex items-center justify-center pt-10  text-blue-50 opacity-50 cursor "><button
            onClick={() => scroll("left")}
            className=" -translate-y-1/2 bg-black hover:scale-110 hover:bg-zinc-800 p-1.5 rounded-full shadow-lg"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={() => scroll("right")}
            className=" -translate-y-1/2 bg-black text-white p-1.5 hover:scale-110 hover:bg-zinc-800 rounded-full shadow-lg"
          >
            <ChevronRight size={28} />
          </button></div>

        </div>
    </section>
  );
};

export default Features;
