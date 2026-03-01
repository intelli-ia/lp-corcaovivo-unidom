import Hero from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";

export default function Home() {
  return (
    <main className="min-h-[100dvh] flex flex-col bg-background">
      <Hero />
      <Marquee />
    </main>
  );
}
