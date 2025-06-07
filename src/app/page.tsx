import { NavBar } from "@/components/Shared";
import { HeroSection } from '@/components/Hero'
import { SkillSection } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="scroll-smooth pt-32">
        <section id="hero" className="pb-32"><HeroSection /></section>
        <section id="skills" className="pb-32"><SkillSection /></section>
      </main>
    </>
  );
}
