"use client";

import FooterProjects from "@/components/FooterProjects";
import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";
import projects from "@/data/projects.json";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTailwindcss, SiTypescript, SiHtml5, SiCss3, SiNextdotjs, SiPostgresql, SiNodedotjs } from "react-icons/si";

const techIconMap: { [key: string]: React.ReactNode } = {
  react: <FaReact title="React" className="w-[50px] h-[50px]" />,
  javascript: <SiJavascript title="JavaScript" className="w-[50px] h-[50px]" />,
  typescript: <SiTypescript title="TypeScript" className="w-[50px] h-[50px]" />,
  tailwind: <SiTailwindcss title="TailwindCSS" className="w-[50px] h-[50px]" />,
  html: <SiHtml5 title="HTML" className="w-[50px] h-[50px]" />,
  css: <SiCss3 title="CSS" className="w-[50px] h-[50px]" />,
  nextjs: <SiNextdotjs title="Next.js" className="w-[50px] h-[50px]" />,
  postgresql: <SiPostgresql title="PostgreSQL" className="w-[50px] h-[50px]" />,
  nodejs: <SiNodedotjs title="Node.js" className="w-[50px] h-[50px]" />
};

export default function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center font-bold text-red-500">
        Projeto não encontrado.
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-primary text-secundary font-all font-bold overflow-x-hidden">
      <div className="w-full flex justify-center mt-10">
        <Image
          src={project.image}
          alt={project.title}
          width={448.63}
          height={446.63}
          className="w-auto h-auto max-w-none select-none pointer-events-none"
        />
      </div>

      <div className="mt-8 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          {project.title}
        </h1>

        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          {project.description}
        </p>

        <div className="mt-8 flex justify-center">
          <div className="w-[286px] h-[155px] bg-black rounded-lg overflow-hidden">
            <video
              className="w-full h-full object-cover"
              controls
              poster={project.poster}
            >
              <source src={project.video} type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </div>
        </div>

        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          {project.technical}
        </p>

        <p className="mt-10 text-4xl md:text-xl max-w-3xl mx-auto text-center">
          Linguagens Utilizadas
        </p>

        <div className="mt-4 flex justify-center gap-6">
          {project.techs.map((tech, index) => (
            <span key={index}>
              {techIconMap[tech.toLowerCase()] ?? null}
            </span>
          ))}
        </div>
      </div>

      <FooterProjects />
    </div>
  );
}
