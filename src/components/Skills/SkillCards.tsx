"use client"
import { skills } from "@/lib/data";
import {SkillCard} from '@/components/Skills';
import {useWindowSize} from '@/hooks/useWindowSize'

export const SkillCards = () => {
    const isLargeScreen = useWindowSize();

    return (
        <div className="flex flex-wrap justify-center gap-6">
            {Object.entries(skills).map(([domain, skillInfo], index) => (
                <SkillCard key={domain} domain={domain} skillInfo={skillInfo} 
                custom={isLargeScreen ? { delay: (index+2) * 1 } : { delay: 0 }}
                />
            ))}
        </div>
    )
}