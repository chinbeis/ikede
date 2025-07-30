import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import PresidentsWord from "@/components/PresidentsWord";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <section id="services">
        <Services />
      </section>
      <Projects />
      <Partners />
      <PresidentsWord />
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}