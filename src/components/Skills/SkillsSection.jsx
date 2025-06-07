import { TerminalCaptions } from '@/components/Shared'
import {SkillCards} from '@/components/Skills'
import { terminalConsts } from '@/lib/constants'
export default function SkillsSection() {
    return (
        <div className="flex justify-center w-full px-4 sm:px-6">
            <div className="w-full max-w-5xl">
                <div className="mb-10">
                    <TerminalCaptions text={terminalConsts.skills} />
                    <br />
                    <div className="font-mono text-4xl font-bold">
                        <span className="text-indigo-600 pr-4">const</span>
                        <span className="text-cyan-600 pr-4">mySkills</span>
                        <span className="text-white pr-4">=</span>
                        <span className="text-purple-500 pr-4">{"{"}</span>
                    </div>

                    <p className="text-[14px] text-zinc-400 border-l-2 border-zinc-600 p-4 my-4 max-w-[600px]">
                        I've worked with a wide range of technologies across the full stack, with expertise in modern JavaScript frameworks, backend systems, and cloud infrastructure.
                    </p>
                </div>
                <SkillCards />
            </div>
        </div>
    )
}