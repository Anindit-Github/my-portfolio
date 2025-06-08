import { ProjectsDescription, terminalConsts } from "@/lib/constants"
import { TerminalCaptions } from "../Shared"
import { DescPara } from "../Shared/DescPara"

export const ProjectHeader = () => {
    return (
        <div className="mb-10 border">
            <TerminalCaptions text={terminalConsts.projects} />
            <br />
            <div className="font-mono text-4xl font-bold">
                <span className="text-purple-500">.map</span>
                <span className="text-white">{'('}</span>
                <span className="text-cyan-600">projects</span>
                <span className="text-white pr-4">{')'}</span>
            </div>

            <DescPara text={ProjectsDescription} />

        </div>
    )
}