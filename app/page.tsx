import About from "@/components/About";
import Header from "@/components/Header";
import Techs from "@/components/Techs"
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <section id="home"><Header /></section>
      <section id="tech" className="scroll-mt-20"><Techs /></section>
      <section id="about" className="scroll-mt-20"><About /></section>
      <section id="project" className="scroll-mt-20"><Projects /></section>
      <section id="footer" className="scroll-mt-20"><Footer /></section>
    </>
  );
}

