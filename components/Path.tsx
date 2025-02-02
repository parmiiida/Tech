import React from "react";
import { Plus } from "lucide-react"; // Importing an icon (you can change this)

const FadingCard = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-72 gap-5 items-center justify-center min-h-screen bg-black px-4">
      {/* Header or Any Extra Content */}
      <div className="text-white text-center pt-10 text-lg font-semibold">
        Hi Baby
      </div>

      {/* Card Container */}
      <div
        className="relative w-full max-w-md md:max-w-lg lg:max-w-xl min-h-[480px] rounded-lg p-1 backdrop-blur-xl border border-white/25 "
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.1))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.1))",
        }}
      >
        <div
          className="relative w-full min-h-[480px] rounded-lg p-6 backdrop-blur-xl border border-white/25"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.1))",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.1))",
          }}
        >
          <div className="h-[1px] bg-white/20 w-auto" />
          <div className="px-4">
            {/* Green Plus Icon */}
            <div className="w-8 h-8 mt-3 flex items-center justify-center bg-green-600/20 rounded-md mb-3">
              <Plus className="text-green-400" size={20} />
            </div>

            {/* Title */}
            <h2 className="text-white font-semibold text-lg">
              Convert text to issues
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 text-sm mt-1">
              Seamlessly move between ideation and execution.
            </p>

            {/* Task List */}
            <div className="mt-4 space-y-2">
              {[
                {
                  id: "ENG-231",
                  text: "Implement contextual memory",
                  icon: "⏳",
                },
                {
                  id: "ENG-232",
                  text: "Better bias filtering algorithms",
                  icon: "⚠️",
                },
                {
                  id: "ENG-233",
                  text: "Upgrade model selection logic",
                  icon: "⚠️",
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md bg-gray-700/40 text-gray-300 text-sm w-fit"
                >
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.id}</span>
                  <span className="opacity-80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FadingCard;
