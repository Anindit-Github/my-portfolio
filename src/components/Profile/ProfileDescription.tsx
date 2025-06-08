import { terminalConsts } from "@/lib/constants";
import { TerminalCaptions } from "../Shared";

export const ProfileDescription = () => {
    return (

        <div className="mb-10">

            <TerminalCaptions text={terminalConsts.profile} />
            <br />
            <div className="font-mono text-4xl font-bold">
                <span className="text-cyan-600 pr-4">class</span>
                <span className="text-white pr-4">AboutMe</span>
                <span className="text-indigo-600 pr-4">extends</span>
                <span className="text-purple-500 pr-4">Developer</span>
            </div>

            <p className="text-[14px] text-zinc-400 border-l-2 border-zinc-600 p-4 my-4 max-w-[600px]">
                The story behind the code - personal journey, professional experience, and what drives me as a developer.
            </p>
        </div>
    )
}