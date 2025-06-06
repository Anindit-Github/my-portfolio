// components/Navbar.tsx
import { Terminal, Code } from 'react-feather';
export default function Navbar() {
    return (
        <nav className="p-6 fixed top-0 w-full shadow z-50 bg-slate-900 opacity-95 backdrop-blur-2xl  border-b border-white/10 flex justify-around content-center">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r 
            from-teal-200 via-teal-300 via-cyan-400 via-blue-400 
            via-blue-500 via-violet-400 via-violet-300 via-purple-500 
            to-fuchsia-600 bg-clip-text text-transparent self-center">
                {"<Anindit.Panigrahi/>"}
            </h1>

            <ul className="font-mono flex gap-6 content-center text-zinc-400 font-bold self-center">
                <li><a href="#hero" className="flex items-center gap-1 hover:text-zinc-200">
                    <Terminal size={20} />
                    _home
                </a></li>
                <li><a href="#hero" className="flex items-center gap-1 hover:text-zinc-200">
                    <Code size={20} />
                    _skills
                </a></li>
                <li><a href="#projects" className="hover:text-zinc-200">_projects</a></li>
                <li><a href="#contact" className="hover:text-zinc-200">_about</a></li>
                <li><a href="#contact" className="hover:text-zinc-200">_blog</a></li>
                <li><a href="#contact" className="hover:text-zinc-200">_contact</a></li>
            </ul>
        </nav>
    );
}
