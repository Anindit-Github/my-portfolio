import { terminalConsts, UserDescription } from "@/lib/constants";
import { TerminalCaptions } from "../Shared";
import { DescPara } from "../Shared/DescPara";

export const ProfileDescription = () => {
    return (

        <div className="mb-10">
            <TerminalCaptions text={terminalConsts.profile} />
            <br />
            <div className="font-mono text-4xl font-bold">
                <div className="block md:inline">

                    <span className="text-cyan-600 pr-4">class</span>
                    <span className="text-white pr-4">AboutMe</span>
                </div>
                <div className="block md:inline">

                    <span className="text-indigo-600 pr-4">extends</span>
                    <span className="text-purple-500 pr-4">Developer</span>
                </div>
            </div>
            <DescPara text={UserDescription} />
        </div>
    )
}