import Image from "next/image";

export default function Techs() {
    return (
        <div className="h-100 rounded-2xl shadow-3xl bg-secundary font-all font-bold sm:rounded-none sm:shadow-none lg:h-150">
            <h2 className="text-base text-primary p-5 lg:text-xl">Tecnologias</h2>
            <div className="flex flex-col items-center pt-10 sm:pt-2">
                <Image
                    className="image-tech lg:w-100"
                    width={200}
                    height={200}
                    alt="Linkedin"
                    src="/Elipse.svg"
                    sizes=""
                />
            </div>
        </div>
    );
}
