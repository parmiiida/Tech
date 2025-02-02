import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="h-screen w-full bg-black flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12 py-10">

        {/* Image & Overlay Title */}
        <div className="relative w-full md:w-[50%]">
          <Image
            src="/company.jpg"
            alt="About"
            width={500}
            height={300}
            className="w-full h-auto opacity-30"
          />
          <h1 className="text-white border-2 border-white text-4xl md:text-6xl font-bold px-6 py-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            Who we are
          </h1>
        </div>

        {/* About Text Section */}
        <div className="w-full md:w-[50%] space-y-6">
          <h1 className="text-white text-3xl md:text-4xl font-bold">About</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci quas dignissimos
            maxime qui alias debitis perspiciatis voluptates fuga eligendi? Velit aut expedita
            perspiciatis quidem dolores perferendis ratione voluptates enim at.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
