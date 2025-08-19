import {
  Hero,
  About,
  Skills,
  Projects,
  Features,
  Contact,
  StarsCanvas,
  Navbar,
} from "@/components";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative z-0 bg-bg overflow-clip">
      <Navbar navItems={navItems} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Features />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </main>
  );
}
