import { NavBar } from "@/components/Shared";
import { HeroSection } from '@/components/Hero'
import { SkillSection } from "@/components/Skills";
import {ProfileSection} from "@/components/Profile";
import ProjectSection from "@/components/Projects/ProjectSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-32">
        <section id="hero" className="pb-32"><HeroSection /></section>
        <section id="skills" className="pb-32"><SkillSection /></section>
        <section id="projects" className="pb-32"><ProjectSection/></section>
        <section id="about" className="pb-32"><ProfileSection/></section>
      </main>
    </>
  );
}
