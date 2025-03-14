import About from "@/components/About";
import Header from "@/components/Header";
import Techs from "@/components/Techs"
import Projects from "@/components/Projects";
import Image from "next/image";
import { StrictMode } from "react";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <StrictMode>
      <div className="h-screen">
        <div id="home" className=""><Header /></div>
        <div id="tech" className="-mt-5 lg:mt-0"><Techs /></div>
        <div id="about" className="-mt-5 lg:mt-0"><About /></div>
        <div id="project" className="-mt-5 lg:mt-0"><Projects /></div>
        <div id="footer" className=""><Footer /></div>
      </div>
    </StrictMode>
  );
}
