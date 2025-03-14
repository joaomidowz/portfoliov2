"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
    const [copied, setCopied] = useState(false);
    const email = 'jgcustodio2005@gmail.com'
    setTimeout(() => setCopied(false), 2000)

    return (
        <div className="h-[394px] lg:h-[460px] xl:h-[394px] bg-primary font-all font-bold inset-shadow-md text-secundary sm:rounded-none sm:inset-shadow-none ">
            <div className="flex flex-col items-center gap-5 lg:text-lg">

                <div className="flex flex-col items-center gap-5 lg:text-lg xl:flex-row xl:mt-10 xl:bg-secundary xl:px-8 xl:rounded-3xl">
                    <h2 className="text-lg pt-6 xl:text-primary xl:p-6 xl:text-2xl xl:font-normal xl:italic">Vamos trabalhar juntos!</h2>
                    <div className="flex flex-col items-center gap-5 xl:flex-row-reverse xl:gap-0">
                        <span className="bg-white p-3 rounded-2xl xl:font-normal xl:italic xl:px-10 xl:-ml-6">{email}</span>
                        <button onClick={async () => {
                            await navigator.clipboard.writeText(email)
                            setCopied(true)
                        }}
                            className="text-primary p-4 bg-secundary rounded-2xl xl:font-normal xl:italic xl:bg-terciary xl:text-secundary xl:p-3 xl:z-10 transition-transform duration-300 ease-out hover:scale-105 active:scale-90">{copied ? 'Copiado!' : 'Copiar!'}</button>
                    </div>

                </div>
                <p className="">Desenvolvido por</p>

                <Image
                    className="image-icon transition-transform duration-300 ease-out hover:scale-105 active:scale-90"
                    width={50}
                    height={50}
                    alt="RoundedIcon"
                    src="/RoundedIcon.svg"
                    sizes="" />
                <div className="flex flex-row gap-1">
                    <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="link-footer">

                        <Image
                            className="image-footer transition-transform duration-300 ease-out hover:scale-105 active:scale-90"
                            width={50}
                            height={50}
                            alt="Linkedin"
                            src="/Linkedin.svg"
                            sizes="" />
                    </Link>
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="link-footer">
                        <Image
                            className="image-footer git transition-transform duration-300 ease-out hover:scale-105 active:scale-90"
                            width={50}
                            height={50}
                            alt="Linkedin"
                            src="/Github.svg"
                            sizes="" />
                    </Link>
                    <a href="/curriculoJoao.pdf"
                                target="_blank"
                                download
                                rel="noopener noreferrer"
                                className="link-footer">
                        <Image
                            className="image-footer transition-transform duration-300 ease-out hover:scale-105 active:scale-90"
                            width={50}
                            height={50}
                            alt="Linkedin"
                            src="/GoogleDocs.svg"
                            sizes="" />
                    </a>



                </div>
            </div>
        </div>
    );
}
