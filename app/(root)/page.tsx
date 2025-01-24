import Hero from "@/components/Hero"
import About from "@/components/About"
import WhyUs from "@/components/WhyUs"

export default function Home() {
  return (
    <div className=" scroll-smooth text-white overflow-x-hidden scrollbar-hide">
      <Hero />
      <About />
      <WhyUs />
    </div>
  );
}
