'use client';

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

export default function FooterProjects() {
    const [copied, setCopied] = useState(false);
    const email = "jgcustodio2005@gmail.com";

    const handleCopy = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="h-[420px] md:h-[460px] xl:h-[394px] bg-primary font-all font-bold text-secundary sm:rounded-none">
            <div className="flex flex-col items-center gap-5 lg:text-lg">
                <div className="flex flex-col items-center gap-5 lg:text-lg xl:flex-row xl:mt-10 xl:bg-secundary xl:px-8 xl:rounded-3xl">
                    <h2 className="text-lg pt-6 xl:p-6 xl:text-2xl xl:font-normal xl:italic xl:text-primary">
                        Vamos trabalhar juntos!
                    </h2>
                    <div className="flex flex-col items-center gap-5 xl:flex-row-reverse xl:gap-0">
                        <span className="bg-white p-3 rounded-2xl xl:font-normal xl:italic xl:px-10 xl:-ml-6">
                            {email}
                        </span>
                        <button
                            onClick={handleCopy}
                            className="rounded-2xl bg-secundary p-4 text-primary transition-transform duration-300 ease-out hover:scale-105 active:scale-90 xl:z-10 xl:bg-primary xl:p-3 xl:font-normal xl:italic xl:text-secundary"
                        >
                            {copied ? "Copiado!" : "Copiar!"}
                        </button>
                    </div>
                </div>

                <p className="">Desenvolvido por</p>

                <div className="transition-transform duration-300 ease-out hover:scale-105 active:scale-90">
                    <img
                        src="/RoundedIcon.svg"
                        alt="RoundedIcon"
                        className="w-[60px] xs:w-[75px] xs1:w-[80px] sm:w-[85px] md:w-[90px] lg:w-[90px] xl:w-[100px]"
                    />
                </div>

                <div className="flex flex-row gap-3">
                    <Link href="https://www.linkedin.com/in/jo%C3%A3omidowz/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-secundary w-[40px] h-[40px] xs:w-[45px] xs:h-[45px] xs1:w-[50px] xs1:h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[75px] xl:h-[75px] transition-transform duration-300 ease-out hover:scale-105 active:scale-90" />
                    </Link>
                    <Link href="https://github.com/joaomidowz" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-secundary w-[40px] h-[40px] xs:w-[45px] xs:h-[45px] xs1:w-[50px] xs1:h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[75px] xl:h-[75px] transition-transform duration-300 ease-out hover:scale-105 active:scale-90" />
                    </Link>
                    <a
                        href="/curriculoJoao.pdf"
                        target="_blank"
                        download
                        rel="noopener noreferrer"
                    >
                        <FaFileAlt className="text-secundary w-[40px] h-[40px] xs:w-[45px] xs:h-[45px] xs1:w-[50px] xs1:h-[50px] sm:w-[55px] sm:h-[55px] md:w-[60px] md:h-[60px] lg:w-[65px] lg:h-[65px] xl:w-[75px] xl:h-[75px] transition-transform duration-300 ease-out hover:scale-105 active:scale-90" />
                    </a>
                </div>
            </div>
        </div>
    );
}
