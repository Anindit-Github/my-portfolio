"use client"

import { NavBar } from "@/components/Shared";
import { HeroSection } from '@/components/Hero'
import { SkillSection } from "@/components/Skills";
import {ProfileSection} from "@/components/Profile";
import ProjectSection from "@/components/Projects/ProjectSection";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Home() {

  const observerRef = useRef(null);
  
  const currentPage = useIntersectionObserver(observerRef);

  return (
    <>
      <NavBar currentPage={currentPage}/>
      <main className="main-wrapper pt-32" ref={observerRef}>
        <section id="hero" className="pb-32"><HeroSection /></section>
        <section id="skills" className="pb-32"><SkillSection /></section>
        <section id="projects" className="pb-32"><ProjectSection/></section>
        <section id="about" className="pb-32"><ProfileSection/></section>
      </main>
    </>
  );
}
