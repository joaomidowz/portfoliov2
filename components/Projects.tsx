"use client"; // Adicione isso no topo do arquiv
import Slider from "./Slider";


export default function Projects() {
    return (
        <div className="h-100 rounded-t-2xl shadow-3xl bg-secundary font-all font-bold sm:rounded-none sm:shadow-none lg:h-150 xl:h-screen ">
            <h2 className="text-base text-primary pt-10 pl-10 lg:text-xl xl:text-2xl">Projetos</h2>
            <div className="">
            <Slider/>
            </div>
        </div>
    );
}
