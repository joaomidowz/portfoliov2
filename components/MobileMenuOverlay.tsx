'use client';
import { HiX } from 'react-icons/hi';
import { useRouter, usePathname } from 'next/navigation';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenuOverlay({ isOpen, onClose }: Props) {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = (id: string) => {
        if (pathname === '/') {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            onClose();
        } else {
            router.push(`/?scrollTo=${id}`);
            onClose();
        }
    };

    return (
        <div
            className={`fixed inset-x-0 top-[76px] z-40 px-4 transition-all duration-300 ease-out sm:hidden ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        >
            <div
                className={`overflow-hidden rounded-[2rem] border border-secundary/12 bg-secundary text-primary shadow-2xl transition-all duration-300 ease-out ${isOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'}`}
            >
                <div className="flex items-center justify-between border-b border-primary/12 px-5 py-4">
                    <p className="text-sm font-bold uppercase tracking-[0.28em] text-primary/70">Navegacao</p>
                    <button onClick={onClose} className="rounded-full bg-primary/10 p-2 text-3xl text-primary">
                        <HiX />
                    </button>
                </div>

                <div className="flex flex-col gap-3 p-5">
                    <button onClick={() => handleClick('about')} className="rounded-2xl bg-primary px-5 py-4 text-left text-lg font-bold text-secundary shadow transition-transform duration-300 active:scale-95">
                        Sobre
                    </button>
                    <button onClick={() => handleClick('services')} className="rounded-2xl bg-primary px-5 py-4 text-left text-lg font-bold text-secundary shadow transition-transform duration-300 active:scale-95">
                        Servicos
                    </button>
                    <button onClick={() => handleClick('project')} className="rounded-2xl bg-primary px-5 py-4 text-left text-lg font-bold text-secundary shadow transition-transform duration-300 active:scale-95">
                        Casos
                    </button>
                </div>
            </div>
        </div>
    );
}
