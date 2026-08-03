import About from "@/components/blocks/About";
import ClientStrip from "@/components/blocks/ClientStrip";
import Contact from "@/components/blocks/Contact";
import FAQ from "@/components/blocks/FAQ";
import Hero from "@/components/blocks/Hero";
import Portfolio from "@/components/blocks/Portfolio";
import Process from "@/components/blocks/Process";
import Services from "@/components/blocks/Services";
import Technologies from "@/components/blocks/Technologies";
import Testimonials from "@/components/blocks/Testimonials";
import WhyChooseUs from "@/components/blocks/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <ClientStrip />
      <WhyChooseUs />
      <About />
      <Services />
      <Technologies />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
      <FAQ />
    </div>
  );
}
