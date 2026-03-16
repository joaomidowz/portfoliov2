"use client";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";


export default function Header() {

    return (
        <div className="min-h-screen bg-primary font-all sm:rounded-none sm:mt-20 sm:min-h-0 sm:shadow-none lg:h-150 xl:h-screen">
            <div className="flex flex-col items-center px-6 pb-14 pt-28 text-secundary sm:items-center sm:px-8 sm:pb-16 sm:pt-5 lg:mt-16 xl:pt-10">
                <div className="w-full max-w-4xl text-center">
                    <p className="text-base xs:text-xl lg:text-3xl xl:text-4xl xl:-mb-13">Olá, me chamo João</p>
                    <div className="mt-4 flex flex-col items-center gap-3 sm:mt-0 sm:flex-row sm:justify-center">
                        <h1 className="font-extrabold drop-shadow-3xl text-1hl xs:text-2hl sm:text-3hl lg:text-4hl xl:text-5hl">Fullstack</h1>

                        <div className="flex flex-row gap-3 sm:ml-0.5 sm:gap-5 sm:pt-7 md:gap-3 md:pl-3 md:pt-8.5 xl:pt-13.5">
                            <Link href="https://www.linkedin.com/in/jo%C3%A3omidowz/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 ease-out hover:scale-105 active:scale-90">
                                <FaLinkedin className="text-secundary h-7 w-7 xs:h-8 xs:w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-18 lg:w-18 xl:h-[100px] xl:w-[100px]" />
                            </Link>

                            <Link href="https://github.com/joaomidowz" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 ease-out hover:scale-105 active:scale-90">
                                <FaGithub className="text-secundary h-7 w-7 xs:h-8 xs:w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-18 lg:w-18 xl:h-[100px] xl:w-[100px]" />
                            </Link>

                            <a href="/curriculoJoao.pdf" target="_blank" download rel="noopener noreferrer" className="transition-transform duration-300 ease-out hover:scale-105 active:scale-90">
                                <FaFileAlt className="text-secundary h-7 w-7 xs:h-8 xs:w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-18 lg:w-18 xl:h-[90px] xl:w-[100px]" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-3 flex flex-col items-center sm:-mt-10 lg:-mt-14 xl:-mt-22">
                    <h1 className="px-2 text-center font-extrabold drop-shadow-3xl text-1hl xs:text-2hl sm:pl-5 sm:pr-10 sm:text-3hl lg:pr-14 lg:text-4hl xl:text-5hl">Developer</h1>
                    <div className="pt-6 xs:pt-5 sm:pt-0">
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

                <div className="mt-8 max-w-4xl text-center lg:mt-10">
                    <p className="text-sm font-bold uppercase tracking-[0.28em] text-secundary/70 sm:text-base">
                        Interfaces para negocios
                    </p>
                    <p className="mt-5 text-base leading-relaxed text-secundary/85 sm:text-lg lg:text-2xl">
                        Desenvolvo sites e interfaces que ajudam empresas a transmitir mais credibilidade, apresentar seus servicos com clareza e facilitar o contato com novos clientes.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm font-bold sm:gap-3 sm:text-base">
                        <span className="rounded-full bg-secundary px-5 py-3 text-primary">Sites institucionais</span>
                        <span className="rounded-full border border-secundary/20 bg-white/70 px-5 py-3">Landing pages</span>
                        <span className="rounded-full border border-secundary/20 bg-white/70 px-5 py-3">Interfaces para sistemas</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
