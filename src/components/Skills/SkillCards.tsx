"use client"
import { skills } from "@/lib/data";
import {SkillCard} from '@/components/Skills';
import { useEffect, useState } from "react";

export const SkillCards = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


    return (
        <div className="flex flex-wrap justify-center gap-6">
            {Object.entries(skills).map(([domain, skillInfo], index) => (
                <SkillCard key={domain} domain={domain} skillInfo={skillInfo} 
                custom={isLargeScreen ? { delay: index * 0.4 } : { delay: 0 }}
                />
            ))}
        </div>
    )
}