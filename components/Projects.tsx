"use client"; // Adicione isso no topo do arquiv
import Slider from "./Slider";


export default function Projects() {
    return (
        <div className="h-100 rounded-t-2xl shadow-3xl bg-secundary font-all font-bold xl:h-screen sm:rounded-none sm:shadow-none lg:h-150">
            <h2 className="text-base text-primary p-5 lg:text-xl">Projetos</h2>
            <div className="">
            <Slider/>
            </div>
        </div>
    );
}
