import Image from "next/image";
const email = 'jgcustodio2005@gmail.com'

export default function Footer() {
    return (
        <div className="h-[394px] lg:h-[460px] bg-primary font-all font-bold inset-shadow-md text-secundary sm:rounded-none sm:inset-shadow-none ">
            <div className="flex flex-col items-center gap-5 lg:text-lg">
                <h2 className="text-lg pt-6">Vamos trabalhar juntos!</h2>
                <span className="bg-white p-3 rounded-2xl">{email}</span>
                <button className="text-primary p-4 bg-secundary rounded-2xl">Copiar!</button>
                <p className="">Desenvolvido por</p>
                <Image
                    className="image-icon"
                    width={50}
                    height={50}
                    alt="RoundedIcon"
                    src="/RoundedIcon.svg"
                    sizes="" />
                <div className="flex flex-row gap-3">
                    <Image
                        className="image-responsive"
                        width={30}
                        height={30}
                        alt="Linkedin"
                        src="/Linkedin.svg"
                        sizes="" />
                    <Image
                        className="image-responsive"
                        width={30}
                        height={30}
                        alt="Linkedin"
                        src="/Github.svg"
                        sizes="" />
                    <Image
                        className="image-responsive"
                        width={30}
                        height={30}
                        alt="Linkedin"
                        src="/GoogleDocs.svg"
                        sizes="" />
                </div>
            </div>
        </div>
    );
}
