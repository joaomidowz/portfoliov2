"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";


export default function Header() {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className="h-100 bg-primary font-all sm:rounded-none sm:shadow-none lg:h-150 xl:h-screen">
            <header className="p-5">
                <nav className="flex flex-row px-3 justify-between sm:justify-end sm:gap-5 lg:gap-10 font-bold drop-shadow-3xl">
                    <button onClick={() => scrollToSection('tech')} className="cursor-pointer text-sm px-1 py-2 lg:py-3 xs1:w-[100px] lg:w-[120px] bg-secundary text-primary rounded-sm transition-transform duration-300 ease-out hover:scale-105 active:scale-90">Tecnologias</button>
                    <button onClick={() => scrollToSection('about')} className="cursor-pointer text-sm px-4 py-2 lg:py-3 xs1:w-[100px] lg:w-[120px] bg-secundary text-primary rounded-sm transition-transform duration-300 ease-out hover:scale-105 active:scale-90">Sobre</button>
                    <button onClick={() => scrollToSection('project')} className="cursor-pointer text-sm px-2 py-2 lg:py-3 xs1:w-[100px] lg:w-[120px] bg-secundary text-primary rounded-sm transition-transform duration-300 ease-out hover:scale-105 active:scale-90">Projetos</button>
                </nav>
            </header>
            <div className="flex flex-col text-secundary px-8 pt-10 sm:items-center sm:pt-5 xl:pt-10">
                <div>
                    <p className="text-base -mb-4 xs:text-xl lg:text-3xl xl:text-4xl xl:-mb-13">Olá, me chamo João👋</p>
                    <div className="flex flex-row">
                        <h1 className="font-extrabold drop-shadow-3xl text-1hl xs:text-2hl sm:text-3hl lg:text-4hl xl:text-5hl ">Fullstack</h1>

                        <div className="flex flex-row pt-5.5 ml-1 gap-1 xs:pt-5.5 xs1:pt-4.5 sm:pt-7 sm:ml-0.5 sm:gap-5 md:gap-3 md:pl-3 md:pt-8.5 xl:pt-13.5">
                            <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 ease-out hover:scale-105 active:scale-90">
                                <FaLinkedin className="text-secundary w-6 h-6 xs:w-7.5 xs:h-7.5 xs1:w-8.5 xs1:h-8.5 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-18 lg:h-18 xl:w-[100px] xl:h-[100px]" />
                            </Link>

                            <Link href="https://github.com/joaomidowz" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 ease-out hover:scale-105 active:scale-90">
                                <FaGithub className="text-secundary w-6 h-6 xs:w-7.5 xs:h-7.5 xs1:w-8.5 xs1:h-8.5 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-18 lg:h-18 xl:w-[100px] xl:h-[100px]" />
                            </Link>

                            <a href="/curriculoJoao.pdf" target="_blank" download rel="noopener noreferrer" className="transition-transform duration-300 ease-out hover:scale-105 active:scale-90">
                                <FaFileAlt className="text-secundary w-6 h-6 xs:w-7.5 xs:h-7.5 xs1:w-8.5 xs1:h-8.5 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-18 lg:h-18 xl:w-[100px] xl:h-[90px]" />
                            </a>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col items-center -mt-6 sm:-mt-10 lg:-mt-14 xl:-mt-22">
                    <h1 className="text-center font-extrabold pl-5 drop-shadow-3xl text-1hl xs:text-2hl sm:text-3hl lg:text-4hl xl:text-5hl xs:pr-4 sm:pr-10 lg:pr-14">Developer</h1>
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