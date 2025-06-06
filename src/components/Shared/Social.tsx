import { GitHub, Linkedin, Twitter, FileText } from "react-feather"

export default function Social() {
    return (
        <div className="flex text-zinc-400">
            <a href="#projects" className="hover:text-zinc-200 pr-4"><GitHub size={18}/></a>
            <a href="#projects" className="hover:text-zinc-200 pr-4"><Linkedin size={18}/></a>
            <a href="#projects" className="hover:text-zinc-200 pr-4"><Twitter size={18}/></a>
            <a href="#projects" className="hover:text-zinc-200"><FileText size={18}/></a>
        </div>
    )
}
