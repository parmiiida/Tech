
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Technologies from "@/components/Technologies";
import Feedback from "@/components/Feedback";
import StepByStep from "@/components/StepByStep";
import Path from "@/components/Path";

export default function Home() {



  return (
    <div  className="scroll-smooth text-white">
      <Hero />
      <About />
      {/* Blurred Background Effect */}

      <WhyUs />
      <Feedback />
      {/* <Technologies/> */}
      {/* <StepByStep/> */}
      <Path />
    </div>
  );
}

