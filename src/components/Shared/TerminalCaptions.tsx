import { Terminal } from "react-feather";

export default function TerminalCaptions({text}:{text:string}) {
    return (
        <div className="my-4 py-1 inline-flex pr-4 items-center rounded-md bg-gray-800">
            <span className="pl-2 text-cyan-400"><Terminal size={16} /></span>
            <span className="pl-2 text-zinc-400 text-sm">{text}</span>
        </div>
    )
}