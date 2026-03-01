import Hero from "@/components/sections/Hero";
import WhatYouLearn from "@/components/sections/WhatYouLearn";
import Schedule from "@/components/sections/Schedule";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-[100dvh] flex flex-col bg-background">
      <Hero />
      <WhatYouLearn />
      <Schedule />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
