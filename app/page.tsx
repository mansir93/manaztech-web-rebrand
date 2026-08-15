// Path: app/page.tsx
import About from "@/components/blocks/About";
import ClientStrip from "@/components/blocks/ClientStrip";
import CTA from "@/components/blocks/CTA";
import Hero from "@/components/blocks/Hero";
import Portfolio from "@/components/blocks/Portfolio";
import Process from "@/components/blocks/Process";
import Services from "@/components/blocks/Services";
import Stats from "@/components/blocks/Stats";
import Technologies from "@/components/blocks/Technologies";
import Testimonials from "@/components/blocks/Testimonials";
import WhyChooseUs from "@/components/blocks/WhyChooseUs";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Stats />
      <ClientStrip />
      <WhyChooseUs />
      <About />
      <Services />
      <Technologies />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
    </div>
  );
}
