import Navbar from "@/components/Shared/NavBar";
import HeroSection from '@/components/Hero/HeroSection'
import SkillCards from "@/components/Skills/SkillCards";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth pt-32">
        <section id="hero" className="pb-32"><HeroSection/></section>
        <section id="skills"><SkillCards/></section>
      </main>
    </>
  );
}
