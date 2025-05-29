'use client';
import { HiX } from 'react-icons/hi';

interface Props {
    onClose: () => void;
}

export default function MobileMenuOverlay({ onClose }: Props) {
    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-secundary text-primary flex flex-col justify-center items-center z-[999]">
            <button onClick={onClose} className="absolute top-6 right-6 text-4xl text-primary">
                <HiX />
            </button>
            <button onClick={() => handleClick('tech')} className="text-xl font-bold mb-6 py-2 w-2/3 bg-primary rounded shadow text-secundary">Tecnologias</button>
            <button onClick={() => handleClick('about')} className="text-xl font-bold mb-6 py-2 w-2/3 bg-primary rounded shadow text-secundary">Sobre</button>
            <button onClick={() => handleClick('project')} className="text-xl font-bold py-2 w-2/3 bg-primary rounded shadow text-secundary">Projetos</button>
        </div>
    );
}
