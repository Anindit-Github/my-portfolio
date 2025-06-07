import TerminalCaptions from "../Shared/TerminalCaptions";
import { terminalConsts } from "@/lib/constants";

export const HeroName = () => {
    return (

        <div>
            <TerminalCaptions text={terminalConsts.developer}/>

            <div>
                <span className="text-sm text-indigo-500">const</span>
                <span className="mx-4 font-mono text-5xl font-extrabold bg-gradient-to-r 
            from-teal-200 via-teal-300 via-cyan-400 via-blue-400 
            via-blue-500 via-violet-400 via-violet-300 via-purple-500 
            to-fuchsia-600 bg-clip-text text-transparent self-center">Anindit</span>
                <p className="mx-6 font-mono text-5xl font-extrabold bg-gradient-to-r 
            from-teal-200 via-teal-300 via-cyan-400 via-blue-400 
            via-blue-500 via-violet-400 via-violet-300 to-purple-700 bg-clip-text text-transparent self-center">Panigrahi</p>
            </div>
            <div className="my-4 font-mono font-semibold w-full text-lg md:text-xl">
                <span className="text-cyan-400">function</span>
                <span className="pl-2 text-zinc-300">FullStackDeveloper</span>
                <span className="text-fuchsia-600">()</span>
            </div>
        </div>
    )

}