import Code from "./Code";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="w-full flex justify-center items-center overflow-x-hidden scrollbar-hide h-dvh relative">
          <Image
        src="/moon.jpg"
        fill
        objectFit="cover"
        alt="Background Image"
        className="opacity-25  object-cover h-screen bg-white/10 shadow-xl  pt-7 "
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.1))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(255,255,255,1), rgba(255,255,255,0.1))",
        }}
       />
            <div className="max-w-6xl px-9 p-auto grid gap-4 space-y-5  grid-cols-1 md:grid-cols-2">

            <div className=" h-full gap-4 md:p-4 flex flex-col relative z-10">
                <h1 className="flex text-white text-3xl md:text-5xl font-bold">Transforms Ideas <br/> into Digital Experiences</h1>
                <p className="text-xs font-bold text-zinc-400">Your partner in modern software development. We craft custom websites, build intuitive mobile apps, and deliver cutting-edge solutions tailored to your vision.</p>
                <div className="hidden md:flex flex-row ">
                  <button
                    className="relative inline-flex items-center justify-center p-1  mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-md bg-gradient-to-br from-purple-900 to-blue-500"
                  >
                    <span className="relative px-5 py-2.5">
                      Purple
                    </span>
                  </button>

                  <button
                    className="relative inline-flex items-center justify-center p-1 bg-black hover:bg-zinc-900  mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-md bg-gradient-to-br from-black-600 to-blue-500"
                  >
                    <span className="relative px-5 py-2.5">
                      Purple
                    </span>
                  </button>
                </div>
              </div>

              <div className=" flex flex-row mx-auto ">

                <div className="cursor-pointer opacity-65" >
                  <Code />
                </div>
                <div className="cursor-pointer mt-10 -ml-[26rem]" >
                  <Code />
                </div>
              </div>


          </div>
        </div>
    )
}

 export default Hero