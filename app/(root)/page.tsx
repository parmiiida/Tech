import Hero from "@/components/Hero"
import About from "@/components/About"
import WhyUs from "@/components/WhyUs"
import Technologies from "@/components/Technologies";
import Feedback from "@/components/Feedback";

export default function Home() {
  return (
    <div className=" scroll-smooth text-white ">
      <Hero />
      <About />
      <div className="absolute w-full h-[500px] rounded-full bg-purple-800/30 blur-[148px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      <WhyUs />
      <Feedback/>
      {/* <Technologies/> */}

    </div>
  );
}
