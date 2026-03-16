// components/HomeContent.tsx
'use client';
import About from "@/components/About";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function HomeContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const target = searchParams.get("scrollTo");
    if (target) {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

  return (
    <>
      <section id="home"><Header /></section>
      <section id="about" className="scroll-mt-20"><About /></section>
      <section id="services" className="scroll-mt-20"><Services /></section>
      <section id="project" className="scroll-mt-20"><Projects /></section>
      <section id="footer" className="scroll-mt-20"><Footer /></section>
    </>
  );
}
