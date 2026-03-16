'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import MobileMenuOverlay from './MobileMenuOverlay';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    if (pathname === '/') {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/?scrollTo=${id}`);
    }
  };

  return (
    <>
      <header className="sticky top-0 left-0 z-50 w-full border-b border-secundary/10 bg-primary/95 px-4 py-4 backdrop-blur-md drop-shadow-3xl">
        <nav className="mx-auto flex max-w-7xl flex-row items-center justify-between px-1 font-bold sm:justify-end sm:gap-5 lg:gap-10">
          <div className="flex-1">
            <Image src="/IconMidwz.svg" onClick={() => router.push('/')} alt="Logo" width={50} height={50} className="block cursor-pointer" />
          </div>

          <div className="hidden sm:flex gap-3">
            <button onClick={() => scrollToSection('about')} className="cursor-pointer text-sm px-4 py-2 lg:py-3 xs1:w-[100px] lg:w-[120px] bg-secundary text-primary rounded-sm hover:scale-105 active:scale-90 transition-transform">Sobre</button>
            <button onClick={() => scrollToSection('services')} className="cursor-pointer text-sm px-2 py-2 lg:py-3 xs1:w-[100px] lg:w-[120px] bg-secundary text-primary rounded-sm hover:scale-105 active:scale-90 transition-transform">Servicos</button>
            <button onClick={() => scrollToSection('project')} className="cursor-pointer text-sm px-2 py-2 lg:py-3 xs1:w-[100px] lg:w-[120px] bg-secundary text-primary rounded-sm hover:scale-105 active:scale-90 transition-transform">Casos</button>
          </div>

          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-secundary/15 bg-white/70 text-secundary transition-transform duration-300 active:scale-90 sm:hidden"
          >
            {isMenuOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
        </nav>
      </header>

      {isMenuOpen && <MobileMenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}
