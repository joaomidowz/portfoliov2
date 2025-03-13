export default function About() {
    return (
        <div className="h-100 rounded-2xl shadow-3xl bg-primary font-all sm:rounded-none sm:shadow-none lg:h-150 xl:h-screen">
            <h2 className="text-base text-secundary p-10 font-bold lg:text-xl xl:text-2xl">Sobre Mim</h2>
            <div className="text-secundary text-sm sm:text-xl lg:text-3xl xl:text-4xl p-5 text-center text-pretty">
            <p className="p-5">Sou o João Gabriel, tenho vinte anos e estou atuando na área de programação e de TI há um ano e estudo faze dois anos. Atualmente faço parte do time de TI da empresa Garra.</p>
            <p className="p-5 xl:pt-16">Nesse momento venho me dedicando ao estudo para me tornar Fullstack, aprimorando, assim,  minhas habilidades na criação de interfaces.</p>
            </div>
        </div>
    );
}
