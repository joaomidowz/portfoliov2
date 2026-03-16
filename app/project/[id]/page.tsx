"use client";

import FooterProjects from "@/components/FooterProjects";
import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import projects from "@/data/projects.json";
import {
  FaReact,
  FaNodeJs
} from "react-icons/fa";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

type ProjectData = {
  id: string;
  title: string;
  headline: string;
  description: string;
  image: string;
  techs: string[];
  clientType: string;
  context: string;
  problem: string;
  solution: string;
  businessHighlights: string[];
  deliverables: string[];
  result: string;
};

const techMap: Record<string, { label: string; icon: React.ReactNode }> = {
  react: { label: "React", icon: <FaReact className="h-5 w-5" /> },
  javascript: { label: "JavaScript", icon: <SiJavascript className="h-5 w-5" /> },
  typescript: { label: "TypeScript", icon: <SiTypescript className="h-5 w-5" /> },
  tailwind: { label: "TailwindCSS", icon: <SiTailwindcss className="h-5 w-5" /> },
  html: { label: "HTML", icon: <SiHtml5 className="h-5 w-5" /> },
  css: { label: "CSS", icon: <SiCss3 className="h-5 w-5" /> },
  nextjs: { label: "Next.js", icon: <SiNextdotjs className="h-5 w-5" /> },
  postgresql: { label: "PostgreSQL", icon: <SiPostgresql className="h-5 w-5" /> },
  nodejs: { label: "Node.js", icon: <FaNodeJs className="h-5 w-5" /> },
  prisma: { label: "Prisma", icon: <SiPrisma className="h-5 w-5" /> },
  "socket.io": { label: "Socket.IO", icon: <SiSocketdotio className="h-5 w-5" /> }
};

export default function Project() {
  const { id } = useParams();
  const projectId = Array.isArray(id) ? id[0] : id;
  const project = (projects as ProjectData[]).find((item) => item.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center font-bold text-red-500">
        Projeto não encontrado.
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-primary text-secundary font-all font-bold overflow-x-hidden">
      <section className="px-4 pb-8 pt-24 md:px-8 lg:px-16 lg:pb-14">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.35em] text-secundary/70">Estudo de caso</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
              {project.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secundary/80 lg:mx-0 md:text-xl">
              {project.headline}
            </p>

            <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              <div className="rounded-3xl border border-secundary/10 bg-secundary p-5 text-primary shadow-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-primary/70">Para quem</p>
                <p className="mt-3 text-base leading-relaxed text-primary/90">{project.clientType}</p>
              </div>
              <div className="rounded-3xl border border-secundary/10 bg-secundary p-5 text-primary shadow-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-primary/70">Visao geral</p>
                <p className="mt-3 text-base leading-relaxed text-primary/90">{project.description}</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[620px] justify-center">
            <div className="absolute inset-6 rounded-full bg-terciary/20 blur-3xl" />
            <div className="relative h-[280px] w-full sm:h-[360px] lg:h-[460px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain select-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 md:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-secundary/10 bg-secundary p-4 text-primary shadow-2xl md:p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-primary/70">Contexto</p>
            <h2 className="mt-2 text-2xl font-extrabold">O que esse projeto precisava resolver</h2>
            <p className="mt-5 text-lg leading-relaxed text-primary/90">
              {project.context}
            </p>

            <div className="mt-8 rounded-[1.75rem] bg-primary/10 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-primary/70">Problema</p>
              <p className="mt-3 text-base leading-relaxed text-primary/90">{project.problem}</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-secundary/10 bg-white/70 p-6 text-secundary shadow-2xl md:p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-primary/70">Solucao proposta</p>
            <p className="mt-4 text-lg leading-relaxed">{project.solution}</p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.28em] text-secundary/60">Tecnologias utilizadas</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.techs.map((tech) => {
                  const config = techMap[tech.toLowerCase()];
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-secundary"
                    >
                      {config?.icon ?? null}
                      {config?.label ?? tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 md:px-8 lg:px-16 lg:py-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-secundary/10 bg-secundary p-6 text-primary shadow-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-primary/70">Destaques de negocio</p>
            <ul className="mt-4 space-y-4 text-base leading-relaxed text-primary/90">
              {project.businessHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-secundary/10 bg-white/70 p-6 text-secundary shadow-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-secundary/60">O que foi entregue</p>
            <ul className="mt-4 space-y-4 text-base leading-relaxed text-secundary/85">
              {project.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-secundary/10 bg-secundary p-6 text-primary shadow-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-primary/70">Impacto esperado</p>
            <p className="mt-4 text-base leading-relaxed text-primary/90">{project.result}</p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 pt-2 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-secundary/10 bg-gradient-to-r from-secundary to-[#6a63f0] p-6 text-primary shadow-xl md:p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-primary/70">Leitura final do case</p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-primary/90 md:text-xl">
            {project.result}
          </p>
        </div>
      </section>

      <FooterProjects />
    </div>
  );
}
