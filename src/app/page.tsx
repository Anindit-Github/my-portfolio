import { NavBar } from "@/components/Shared";
import { HeroSection } from '@/components/Hero'
import { SkillSection } from "@/components/Skills";
import {ProfileSection} from "@/components/Profile";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="scroll-smooth pt-32">
        <section id="hero" className="pb-32"><HeroSection /></section>
        <section id="skills" className="pb-32"><SkillSection /></section>
        <section id="about" className="pb-32"><ProfileSection/></section>
      </main>
    </>
  );
}
