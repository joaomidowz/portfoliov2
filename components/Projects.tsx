"use client";
import Slider from "./Slider";

export default function Projects() {
  return (
    <div className="bg-secundary font-all font-bold text-primary shadow-3xl sm:rounded-none sm:shadow-none">
      <div className="mx-auto min-h-[420px] max-w-7xl px-6 py-12 lg:min-h-[600px] lg:px-12 lg:py-16 xl:min-h-screen">
        <div className="max-w-3xl pl-2 lg:pl-10">
          <p className="text-sm uppercase tracking-[0.28em] text-primary/70">Casos selecionados</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Projetos apresentados como solucoes para negocio, com foco em clareza, experiencia e valor percebido.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-primary/85 sm:text-lg">
            Em vez de mostrar apenas tecnologia, organizei os trabalhos abaixo como estudos de caso: contexto, problema, solucao e resultado esperado para o cliente.
          </p>
        </div>
        <div className="flex justify-center pt-8">
          <Slider />
        </div>
      </div>
    </div>
  );
}
