import Image from "next/image";
import Code from "./Code";

const Hero = () => {
    return (
        <div className="  px-9 flex justify-center items-center w-full overflow-x-hidden scrollbar-hide h-[100vh] relative">
            <div className=" w-full max-w-6xl grid  grid-cols-1 md:grid-cols-2">

            <div className="md:order-2 h-full space-y-4 flex flex-col text-right items-end relative z-10">
                <h1 className="flex text-white text-5xl font-bold"> Tech <br/>   Transforms Ideas <br/> into Digital Experiences</h1>
                <p>Your partner in modern software development. We craft custom websites, build intuitive mobile apps, and deliver cutting-edge solutions tailored to your vision.</p>
              </div>

              <div className="md:order-1">
                <Code/>
              </div>


          </div>
        </div>
    )
}

 export default Hero