import React from 'react'
import { Plus } from "lucide-react";

const Path3 = () => {

  return (

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
                  text: "dsfksdjfhidshfksjhdf",
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

  );
};


export default Path3
