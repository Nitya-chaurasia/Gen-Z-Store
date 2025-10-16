import Hero from "@/components/Hero";
import { NewLaunch, MensCategory, WomensCategory, ComboTees } from "@/components/main";
// import ComboTees from "@/components/main/ComboTees";
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
