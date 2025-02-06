"use client";

import React, { useState } from "react";
import Path1 from "./path/Path1";
import Path2 from "./path/Path2";
import Path3 from "./path/Path3";

const FadingCard = () => {
  const [activeComponent, setActiveComponent] = useState("path1");

  const items = [
    { key: "path1", label: "Collaborative documents" },
    { key: "path2", label: "Inline comments" },
    { key: "path3", label: "Text-to-issue commands" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black px-4 md:gap-24 -mt-12">
      {/* Left Section - Sidebar Navigation */}
      <div className="flex flex-col items-center md:items-start md:space-y-6 py-5 gap-4">
        <h1 className="text-white text-2xl font-semibold">lorem hi sdhddh sh balu
        </h1>

        <div className="flex flex-col gap-2 justify-start ">
          {items.map((item) => (
            <button
              key={item.key}
              onClick={() => setActiveComponent(item.key)}
              className={`relative text-sm font-medium transition-colors ${
                activeComponent === item.key ? "text-white" : "text-gray-400"
              }`}
            >
              {activeComponent === item.key && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-full w-1 bg-green-400"></span>
              )}
              <span className="pl-3">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Section - Card Container */}
      <div
        className="relative w-full max-w-md md:max-w-lg lg:max-w-lg min-h-[380px] rounded-lg p-1 backdrop-blur-xl border border-white/25"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.1))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.1))",
        }}
      >
        <div
          className="relative w-full min-h-[450px] rounded-lg p-6 backdrop-blur-xl border border-white/25"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.1))",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.1))",
          }}
        >
          <div className="h-[1px] bg-white/20 w-auto" />
          <div className="px-4">
            {activeComponent === "path1" && <Path1 />}
            {activeComponent === "path2" && <Path2 />}
            {activeComponent === "path3" && <Path3 />}
          </div>
        </div>
      </div>
    </div>
  );
};


export default FadingCard;