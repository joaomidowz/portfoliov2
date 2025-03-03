import Image from "next/image";

export default function Header() {
    return (
        <div className="h-100 bg-primary">
            <header className="p-5">
                <nav className="flex flex-row px-0.5 justify-between sm:justify-end  font-bold drop-shadow-3xl">
                    <button className="text-sm px-1 py-2 sm:w-[150px] bg-secundary text-primary rounded-sm transition-transform duration-300 ease-out hover:scale-105 active:scale-90">Tecnologias</button>
                    <button className="text-sm px-4 py-2 sm:w-[150px] bg-secundary text-primary rounded-sm transition-transform duration-300 ease-out hover:scale-105 active:scale-90">Sobre</button>
                    <button className="text-sm px-2 py-2 sm:w-[150px] bg-secundary text-primary rounded-sm transition-transform duration-300 ease-out hover:scale-105 active:scale-90">Projetos</button>
                </nav>
            </header>
            <div className="flex flex-col text-secundary px-5.5 pt-10 text-4xl">
                <div>
                    <p className="text-base">Olá, me chamo João👋</p>
                    <div className="flex flex-row">
                        <h1 className=" font-extrabold drop-shadow-3xl">Fullstack</h1>
                        <div className="flex flex-row pt-2 ml-1">
                            <Image
                                width={45}
                                height={45}
                                alt="Linkedin"
                                src="/Linkedin.svg"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <Image
                                width={45}
                                height={45}
                                alt="GitHub"
                                src="/Github.svg"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <Image
                                width={45}
                                height={45}
                                alt="GoogleDocs"
                                src="/GoogleDocs.svg"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center -mt-2">
                    <h1 className="text-center font-extrabold pr-6 drop-shadow-3xl">Developer</h1>
                    <Image
                    className="pt-8"
                    width={118}
                    height={55}
                    alt="Linkedin"
                    src="/IconMidwz.svg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                </div>
                
            </div>
        </div>
    );
}
