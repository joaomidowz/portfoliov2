//import "";
import Image from "next/image";


export default function Header() {
    return (
        <div className="h-100 bg-primary font-all ">
            <header className="p-5">
                <nav className="flex flex-row px-0.5 justify-between sm:justify-end font-bold drop-shadow-3xl">
                    <button className="text-sm px-1 py-2 sm:w-[150px] bg-secundary text-primary rounded-sm transition-transform duration-300 ease-out hover:scale-105 active:scale-90">Tecnologias</button>
                    <button className="text-sm px-4 py-2 sm:w-[150px] bg-secundary text-primary rounded-sm transition-transform duration-300 ease-out hover:scale-105 active:scale-90">Sobre</button>
                    <button className="text-sm px-2 py-2 sm:w-[150px] bg-secundary text-primary rounded-sm transition-transform duration-300 ease-out hover:scale-105 active:scale-90">Projetos</button>
                </nav>
            </header>
            <div className="flex flex-col text-secundary px-5.5 pt-10">
                <div>
                    <p className="text-base xs:text-xl -mb-4">Olá, me chamo João👋</p>
                    <div className="flex flex-row">
                        <h1 className="font-extrabold drop-shadow-3xl text-1hl xs:text-2hl">Fullstack</h1>
                        <div className="flex flex-row pt-2 ml-1 xs:pt-3 xs:ml-0.5">
                            <Image
                                className="image-responsive"
                                width={30}
                                height={30}
                                alt="Linkedin"
                                src="/Linkedin.svg"
                            />
                            <Image
                                className="image-responsive"
                                width={30}
                                height={30}
                                alt="GitHub"
                                src="/Github.svg"
                            />
                            <Image
                                className="image-responsive"
                                width={30}
                                height={30}
                                alt="GoogleDocs"
                                src="/GoogleDocs.svg"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center -mt-6">
                    <h1 className="text-center font-extrabold pr-6 drop-shadow-3xl text-1hl xs:text-2hl xs:pr-4">Developer</h1>
                    <div className="xs:pt-5 pt-8">
                        <Image
                            className="image-home-icon"
                            width={118}
                            height={55}
                            alt="Icon"
                            src="/IconMidwz.svg"
                            sizes=""
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
