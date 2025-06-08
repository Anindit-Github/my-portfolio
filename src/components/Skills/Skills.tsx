import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import { springTransition } from "@/lib/common";
import { SkillCardHeading } from '@/components/Skills';

const skillBarVariant: Variants = {
    offscreen: {
        scaleX: 0,
        transformOrigin: "left",
    },
    onscreen: {
        scaleX: 1,
        opacity: 1,
        transformOrigin: "left",
        transition: springTransition(0, 0.9),
    },
}

export const Skills = ({domain, skillInfo}: {domain: string, skillInfo: Array<{name: string, percent: number}>,}) => {
    return (
        <>
        <SkillCardHeading domain={domain}/>
        
                    {/* Skills */}
                    <div className="space-y-3">
                        {skillInfo.map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between text-sm text-gray-300">
                                    <span>.{skill.name}</span>
                                    <span>{skill.percent}%</span>
                                </div>
                                <div className="w-full h-2 mt-1 bg-gray-700 rounded-full">
                                    <motion.div
                                        className="h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                                        style={{ width: `${skill.percent}%` }}
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        viewport={{ amount: 0.2 }}
                                        variants={skillBarVariant}
                                    ></motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
        </>
    )
}