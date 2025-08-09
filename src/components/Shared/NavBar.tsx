"use client";

import { HamburgerMenu } from "./HamburgerMenu";
import { useEffect, useRef, useState } from "react";
import { links, SectionId } from "@/lib/constants";
import Icon from "./Icon";
import clsx from "clsx";

export default function Navbar({ currentPage }: { currentPage: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="p-6 fixed top-0 w-full shadow z-50 bg-slate-900 opacity-95 backdrop-blur-2xl  border-b border-white/10 flex justify-center">
      <div className="relative w-full flex max-w-5xl  justify-between">
        <h1
          className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r 
            from-teal-200 via-teal-300 via-cyan-400 via-blue-400 
            via-blue-500 via-violet-400 via-violet-300 via-purple-500 
            to-fuchsia-600 bg-clip-text text-transparent self-center"
        >
          {"<Anindit.Panigrahi/>"}
        </h1>

        <ul className="hidden md:flex font-mono gap-6 content-center text-zinc-400 font-bold self-center">
          {links.map(({ id, label, hasIcon, iconName }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={clsx(
                  "hover:text-zinc-200 transition-colors duration-200 flex items-center gap-1",
                  currentPage === id ? "text-white font-bold" : "text-zinc-400"
                )}
              >
                {hasIcon && <Icon name={iconName} />}
                {label}
              </a>
            </li>
          ))}
        </ul>
        <HamburgerMenu
          size={24}
          handleMenu={handleMenu}
          isOpen={isOpen}
          buttonRef={buttonRef}
        />
        {isOpen && (
          <div
            ref={menuRef}
            onClick={handleMenu}
            className="ham-menu-container absolute top-full w-full right-0 mt-4 h-64 bg-linear-to-b from-slate-800 to-slate-900 rounded-xl shadow-lg backdrop-blur-3xl border border-white/5 z-50"
          >
            <ul className="font-mono gap-6 content-center text-zinc-400 font-bold">
              {links.map(({ id, label, hasIcon, iconName }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={clsx(
                      "hover:text-zinc-200 transition-colors duration-200 flex items-center gap-1",
                      currentPage === id
                        ? "text-white font-bold"
                        : "text-zinc-400",
                      id === SectionId.HERO ? "p-4" : "px-4 pb-4"
                    )}
                  >
                    {hasIcon && <Icon name={iconName} />}
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
