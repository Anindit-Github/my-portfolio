// components/Navbar.tsx
"use client"
import { Terminal, Code } from 'react-feather';
import { HamburgerMenu } from './HamburgerMenu';
import { useState } from 'react';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="p-6 fixed top-0 w-full shadow z-50 bg-slate-900 opacity-95 backdrop-blur-2xl  border-b border-white/10 flex justify-center">
            <div className="relative w-full flex max-w-5xl  justify-between">


                <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r 
            from-teal-200 via-teal-300 via-cyan-400 via-blue-400 
            via-blue-500 via-violet-400 via-violet-300 via-purple-500 
            to-fuchsia-600 bg-clip-text text-transparent self-center">
                    {"<Anindit.Panigrahi/>"}
                </h1>

                <ul className="hidden md:flex font-mono gap-6 content-center text-zinc-400 font-bold self-center">
                    <li><a href="#hero" className="flex items-center gap-1 hover:text-zinc-200">
                        <Terminal size={20} />
                        _home
                    </a></li>
                    <li><a href="#skills" className="flex items-center gap-1 hover:text-zinc-200">
                        <Code size={20} />
                        _skills
                    </a></li>
                    <li><a href="#projects" className="hover:text-zinc-200">_projects</a></li>
                    <li><a href="#about" className="hover:text-zinc-200">_about</a></li>
                    <li><a href="#contact" className="hover:text-zinc-200">_blog</a></li>
                    <li><a href="#contact" className="hover:text-zinc-200">_contact</a></li>
                </ul>
                <HamburgerMenu size={24} handleMenu={handleMenu} isOpen={isOpen} />
                {isOpen && (
                    <div onClick={handleMenu} className="ham-menu-container absolute top-full w-full right-0 mt-4 h-64 bg-linear-to-b from-slate-800 to-slate-900 rounded-xl shadow-lg backdrop-blur-3xl border border-white/5 z-50">
                        <ul className="font-mono gap-6 content-center text-zinc-400 font-bold">
                            <li>
                                <a href="#hero" className="flex items-center gap-1 hover:text-zinc-200 p-4">
                                    <Terminal size={20} />
                                    _home
                                </a>
                            </li>

                            <li>
                                <a href="#skills" className="flex items-center gap-1 hover:text-zinc-200 px-4 pb-4">
                                    <Code size={20} />
                                    _skills
                                </a>
                            </li>

                            <li>
                                <a href="#projects" className="flex items-center gap-1 hover:text-zinc-200 px-4 pb-4">
                                    {"{}"} _projects
                                </a>
                            </li>

                            <li>
                                <a href="#about" className="flex items-center gap-1 hover:text-zinc-200 px-4 pb-4">
                                    _about
                                </a>
                            </li>

                            <li>
                                <a href="#contact" className="flex items-center gap-1 hover:text-zinc-200 px-4 pb-4">
                                 _blog
                                </a>
                            </li>

                            <li>
                                <a href="#contact" className="flex items-center gap-1 hover:text-zinc-200 px-4 pb-4">
                                    _contact
                                </a>
                            </li>
                        </ul>

                    </div>
                )}
            </div>

        </nav>
    );
}
