import Code from "./Code";

const Hero = () => {
    return (
        <div className="w-full flex mt-10 justify-center bg-black items-center w-full overflow-x-hidden scrollbar-hide h-screen relative">
            <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/30 blur-[128px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="max-w-6xl px-9 py-[46px] grid  grid-cols-1 md:grid-cols-2">

            <div className=" h-full space-y-4 flex flex-col  relative z-10">
                <h1 className="flex text-white text-5xl font-bold"> Tech <br/>   Transforms Ideas <br/> into Digital Experiences</h1>
                <p>Your partner in modern software development. We craft custom websites, build intuitive mobile apps, and deliver cutting-edge solutions tailored to your vision.</p>
                <div className="flex flex-row">
                  <button
                    className="relative inline-flex items-center justify-center p-1  mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-md bg-gradient-to-br from-purple-600 to-blue-500"
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

              <div className=" flex flex-row ">

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