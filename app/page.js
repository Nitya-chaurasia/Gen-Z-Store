import Hero from "@/components/Hero";
import { NewLaunch, MensCategory, WomensCategory, BestTees } from "@/components/main";
import ComboTees from "@/components/main/ComboTees";
export default function Home() {
  return (
    <main>
      <Hero />
      <NewLaunch />
      <MensCategory />
      <WomensCategory />
      <ComboTees />
    </main>
  );
}
