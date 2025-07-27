import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Projects from "@/components/Projects";
import PresidentsWord from "@/components/PresidentsWord";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <Projects />
      <Partners />
      <Blog />
      <PresidentsWord />
      <Contact />
    </main>
  );
}
