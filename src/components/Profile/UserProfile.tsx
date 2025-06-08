import { User } from "react-feather"
export const UserProfile = () => {
    return (
        <div className="user-profile min-w-[250px] border my-4 border-white/10 rounded-xl p-3 bg-gradient-to-br from-slate-800 to-slate-900 text-[11px] font-bold self-start">
            <div className="heading flex font-mono font-bold border-b-1 border-b-white/10 pb-2">
                <span className="text-cyan-400 pr-2"><User size={15} /></span>
                <span className="text-[12px]">user@portfoilo:~$</span>
            </div>
            <div>
                <p className="text-zinc-400 pb-1">$ whoami</p>
                <p className=" pb-1">&nbsp;&nbsp;Anindit Panigrahi</p>
                <p className="text-zinc-400 pb-1">$ pwd</p>
                <p className="pb-1">&nbsp;&nbsp;/path/to/full-stack-development</p>
                <p className="text-zinc-400 pb-1">$ ls -la skills/</p>
                <p className="">&nbsp;&nbsp;react.js node.js next.js aws</p>
            </div>
        </div>
    )
}