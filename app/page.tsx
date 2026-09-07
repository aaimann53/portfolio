import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="mx-auto h-px w-full max-w-5xl bg-line" />
        <Work />
        <About />
        <Experience />
        <Skills />
        <Services />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
