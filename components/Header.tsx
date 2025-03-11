//import "";
import Image from "next/image";


export default function Header() {
    return (
        <div className="h-100 bg-primary font-all sm:rounded-none sm:shadow-none">
            <header className="p-5">
                <nav className="flex flex-row px-3 justify-between sm:justify-end sm:gap-5 font-bold drop-shadow-3xl">
                    <button className="text-sm px-1 py-2 xs1:w-[100px]  bg-secundary text-primary rounded-sm transition-transform duration-300 ease-out hover:scale-105 active:scale-90">Tecnologias</button>
                    <button className="text-sm px-4 py-2 xs1:w-[100px]  bg-secundary text-primary rounded-sm transition-transform duration-300 ease-out hover:scale-105 active:scale-90">Sobre</button>
                    <button className="text-sm px-2 py-2 xs1:w-[100px]  bg-secundary text-primary rounded-sm transition-transform duration-300 ease-out hover:scale-105 active:scale-90">Projetos</button>
                </nav>
            </header>
            <div className="flex flex-col text-secundary px-8 pt-10 sm:items-center sm:pt-5">
                <div>
                    <p className="text-base xs:text-xl -mb-4">Olá, me chamo João👋</p>
                    <div className="flex flex-row">
                        <h1 className="font-extrabold drop-shadow-3xl text-1hl xs:text-2hl sm:text-3hl">Fullstack</h1>
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
                <div className="flex flex-col items-center -mt-6 sm:-mt-10">
                    <h1 className="text-center font-extrabold pr-6 drop-shadow-3xl text-1hl xs:text-2hl sm:text-3hl xs:pr-4 sm:pr-10">Developer</h1>
                    <div className="sm:pt-0 xs:pt-5 pt-8">
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