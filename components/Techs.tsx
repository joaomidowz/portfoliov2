import Image from "next/image";

export default function Techs() {
    return (
        <div className="h-100 rounded-2xl shadow-3xl bg-secundary font-all font-bold sm:rounded-none sm:shadow-none lg:h-150 xl:h-screen">
            <h2 className="text-base text-primary pt-10 pl-10 lg:text-xl xl:text-2xl">Tecnologias</h2>
            <div className="flex flex-col items-center pt-10 sm:pt-2 xl:pt-0">
                <Image
                    className="image-tech lg:w-100 xl:w-[500px] xl:-mt-14"
                    width={200}
                    height={200}
                    alt="Linkedin"
                    src="/Elipse.svg"
                />
            </div>
        </div>
    );
}
