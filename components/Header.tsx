import Image from "next/image";

export default function Header() {
    return (
        <div className="h-screen bg-primary">
            <header className="p-5">
                <nav className="flex flex-row justify-end gap-10 font-bold">
                    <button className="py-3 w-[150px] bg-secundary text-primary rounded-sm transition-transform duration-300 ease-out hover:scale-105 active:scale-90">Tecnologias</button>
                    <button className="py-3 w-[150px] bg-secundary text-primary rounded-sm transition-transform duration-300 ease-out hover:scale-105 active:scale-90">Sobre</button>
                    <button className="py-3 w-[150px] bg-secundary text-primary rounded-sm transition-transform duration-300 ease-out hover:scale-105 active:scale-90">Projetos</button>
                </nav>
            </header>
            <div className="flex  flex-col text-secundary">
                <div>
                    <p className="text-4xl">Olá, me chamo João👋</p>
                    <div>
                        <h1 className="text-[180px] font-bold">Fullstack</h1>
                        <Image />
                        <Image />
                        <Image />
                    </div>
                </div>
                <div>
                    <h1 className="text-[180px] font-bold">Developer</h1>
                </div>
            </div>
        </div>
    );
}
