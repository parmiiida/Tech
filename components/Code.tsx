"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Code = () => {
  const codeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!codeRef.current) return;

    const element = codeRef.current;

    // GSAP hover animation
    const enterAnimation = () => {
      gsap.to(element, {
        y: -10,
        scale: 1.05, // Slight scale effect
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const leaveAnimation = () => {
      gsap.to(element, {
        y: 0,
        scale: 1, // Reset scale
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Event listeners
    element.addEventListener("mouseenter", enterAnimation);
    element.addEventListener("mouseleave", leaveAnimation);

    return () => {
      element.removeEventListener("mouseenter", enterAnimation);
      element.removeEventListener("mouseleave", leaveAnimation);
    };
  }, []);

  return (
    <div
      ref={codeRef}
      className="text-zinc-600/50 md:mx-auto opacity-90 max-w-6xl mx-7 rounded-[40px] flex sm:text-[13px] text-[7px] backdrop-blur-lg bg-white/10 transition-transform"
    >
      <div className="p-5 pl-5 w-full opacity-75">
        <p className="text-gray-200 space-y-2 font-mono">
          <span className="text-purple-600">&lt;div </span>
          <span className="text-purple-300">class='container'</span>
          <span className="text-purple-600">&gt;</span>
          <br />
          &nbsp;&nbsp;<span className="text-purple-600">&lt;h1 </span>
          <span className="text-purple-300">class='text-4xl font-bold'</span>
          <span className="text-purple-600">&gt;</span>
          <span className="text-white">
            Empowering Ideas, Crafting Digital Excellence
          </span>
          <span className="text-purple-600">&lt;/h1&gt;</span>
          <br />
          &nbsp;&nbsp;<span className="text-purple-600">&lt;p </span>
          <span className="text-purple-300">class='text-lg text-gray-300 mt-2'</span>
          <span className="text-purple-600">&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-gray-300">
            Partnering with companies and individuals to design and develop
            stunning websites
            <br />
            and apps. Combining creativity with cutting-edge technology to
            bring your vision to life.
          </span>
          <br />
          &nbsp;&nbsp;<span className="text-purple-600">&lt;/p&gt;</span>
          <br />
          &nbsp;&nbsp;<span className="text-purple-600">&lt;ul </span>
          <span className="text-purple-300">class='list-disc pl-5 text-gray-300'</span>
          <span className="text-purple-600">&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">&lt;li&gt;</span>
          <span className="text-gray-300">Modern and responsive designs</span>
          <span className="text-purple-600">&lt;/li&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">&lt;li&gt;</span>
          <span className="text-gray-300">Custom web and app development</span>
          <span className="text-purple-600">&lt;/li&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-600">&lt;li&gt;</span>
          <span className="text-gray-300">
            SEO-friendly and scalable solutions
          </span>
          <span className="text-purple-600">&lt;/li&gt;</span>
          <br />
          &nbsp;&nbsp;<span className="text-purple-600">&lt;/ul&gt;</span>
          <br />
          &nbsp;&nbsp;<span className="text-purple-600">&lt;footer </span>
          <span className="text-purple-300">class='text-sm text-gray-400 mt-4'</span>
          <span className="text-purple-600">&gt;</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className="text-gray-400">
            Ready to bring your ideas to life? Let's build something amazing
            together.
          </span>
          <br />
          &nbsp;&nbsp;<span className="text-purple-600">&lt;/footer&gt;</span>
          <br />
          <span className="text-purple-600">&lt;/div&gt;</span>
        </p>
      </div>
    </div>
  );
};

export default Code;
