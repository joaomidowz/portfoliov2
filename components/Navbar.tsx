'use client';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import MobileMenuOverlay from './MobileMenuOverlay';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <header className="p-5 bg-primary top-0 left-0 w-full z-50 fixed drop-shadow-3xl">
                <nav className="flex flex-row px-3 justify-between sm:justify-end sm:gap-5 lg:gap-10 font-bold drop-shadow-2xl">
                    <h1 className="text-lg sm:hidden text-secundary font-bold">Midowz</h1>

                    <div className="hidden sm:flex gap-3">
                        <button onClick={() => scrollToSection('tech')} className="cursor-pointer text-sm px-1 py-2 lg:py-3 xs1:w-[100px] lg:w-[120px] bg-secundary text-primary rounded-sm hover:scale-105 active:scale-90 transition-transform">Tecnologias</button>
                        <button onClick={() => scrollToSection('about')} className="cursor-pointer text-sm px-4 py-2 lg:py-3 xs1:w-[100px] lg:w-[120px] bg-secundary text-primary rounded-sm hover:scale-105 active:scale-90 transition-transform">Sobre</button>
                        <button onClick={() => scrollToSection('project')} className="cursor-pointer text-sm px-2 py-2 lg:py-3 xs1:w-[100px] lg:w-[120px] bg-secundary text-primary rounded-sm hover:scale-105 active:scale-90 transition-transform">Projetos</button>
                    </div>

                    <button onClick={toggleMenu} className="sm:hidden text-secundary text-3xl">
                        <HiMenu />
                    </button>
                </nav>
            </header>

            {isMenuOpen && <MobileMenuOverlay onClose={toggleMenu} />}
        </>
    );
}

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}
