import { TerminalCaptions } from '@/components/Shared'
import {SkillCards} from '@/components/Skills'
import { SkillsDescription, terminalConsts } from '@/lib/constants'
import {TechSection} from './TechSection'
import { DescPara } from '../Shared/DescPara'
import { Scaffold } from '../Shared/Scaffold'
export default function SkillsSection() {
    return (
        <Scaffold>
                <div className="mb-10">
                    <TerminalCaptions text={terminalConsts.skills} />
                    <br />
                    <div className="font-mono text-4xl font-bold">
                        <span className="text-indigo-600 pr-4">const</span>
                        <span className="text-cyan-600 pr-4">mySkills</span>
                        <span className="text-white pr-4">=</span>
                        <span className="text-purple-500 pr-4">{"{"}</span>
                    </div>

                    <DescPara text={SkillsDescription} />
                </div>
                <SkillCards />
                <TechSection/>
        </Scaffold>
    )
}