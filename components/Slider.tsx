'use client';

import { useRouter } from "next/navigation";
import sliderData from "@/data/sliderData.json";
import projects from "@/data/projects.json";

type SliderItem = {
  id: string;
  title: string;
  img: string;
};

type ProjectItem = {
  id: string;
  title: string;
  headline: string;
  clientType: string;
};

const artStyles: Record<string, string> = {
  onebitflix: "scale-[1.22] object-center translate-y-2 sm:translate-y-3 lg:scale-[1.28] lg:translate-y-4",
  unichat: "scale-[1.18] object-center -translate-y-1 sm:-translate-y-2 lg:scale-[1.24] lg:-translate-y-3",
  "login-animated": "scale-[1.16] object-center translate-y-1 sm:translate-y-2 lg:scale-[1.22] lg:translate-y-3",
};

const Slider = () => {
  const router = useRouter();
  const slides = sliderData as SliderItem[];
  const projectMap = new Map(
    (projects as ProjectItem[]).map((project) => [project.id, project])
  );

  const handleClick = (id: string) => {
    router.push(`/project/${id}`);
  };

  return (
    <div className="relative w-full overflow-x-auto overflow-y-visible scrollbar-hide">
      <div
        className="mx-auto flex gap-6 overflow-visible px-2 py-4 lg:px-10"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {slides.map((slide) => {
          const project = projectMap.get(slide.id);

          return (
            <article
              key={slide.id}
              data-slide
              onClick={() => handleClick(slide.id)}
              className="
                group relative z-10 h-[420px] w-[270px]
                flex-shrink-0 scroll-snap-center cursor-pointer overflow-hidden
                rounded-[2rem] border border-secundary/12 bg-secundary shadow-[0_25px_60px_rgba(82,75,224,0.20)]
                transition-transform duration-300 hover:-translate-y-2 active:scale-[0.98]
                sm:h-[460px] sm:w-[300px]
                md:h-[480px] md:w-[320px]
                lg:h-[500px] lg:w-[360px]
                xl:h-[560px] xl:w-[400px]
              "
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#1b174f]/92" />
              <div className="absolute inset-x-0 top-0 z-10 h-36 bg-gradient-to-b from-[#241f73]/55 to-transparent sm:h-40" />
              <div className="absolute inset-x-0 top-0 z-0 h-[52%] overflow-hidden sm:h-[54%] lg:h-[64%]">
                <div className="absolute left-1/2 top-8 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl sm:h-48 sm:w-48 lg:top-10 lg:h-56 lg:w-56" />
                <img
                  src={slide.img}
                  alt={project?.title ?? slide.title}
                  className={`h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.08] ${artStyles[slide.id] ?? "scale-[1.18] object-center"}`}
                />
              </div>

              <div className="absolute inset-x-0 top-0 z-20 flex items-start justify-between p-4 sm:p-5">
                <span className="rounded-full border border-white/20 bg-white/14 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-md sm:text-xs">
                  Case
                </span>
                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-secundary shadow-lg sm:text-xs">
                  Ver projeto
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-20 p-3 text-primary sm:p-4 lg:p-6">
                <div className="rounded-[1.5rem] border border-white/12 bg-white/10 p-4 backdrop-blur-md sm:p-5 lg:p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary/70 sm:text-xs">
                    {project?.clientType ?? "Projeto selecionado"}
                  </p>
                  <h3 className="mt-3 text-lg font-extrabold leading-tight sm:text-xl lg:text-2xl">
                    {project?.title ?? slide.title}
                  </h3>
                  <p className="mt-3 line-clamp-4 text-[13px] leading-relaxed text-primary/85 sm:text-sm lg:text-[15px]">
                    {project?.headline ?? "Estudo de caso com foco em experiencia, clareza e apresentacao."}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
        <div className="w-[1px] flex-shrink-0" />
      </div>
    </div>
  );
};

export default Slider;
