import About from "@/components/About";
import Header from "@/components/Header";
import Techs from "@/components/Techs"
import Projects from "@/components/Projects";
import Image from "next/image";
import { StrictMode } from "react";


export default function Home() {
  return (
    <StrictMode>
      <div className="h-screen ">
        <div id="home" className=""><Header /></div>
        <div id="tech" className="-mt-5"><Techs /></div>
        <div id="tech" className="-mt-5"><About /></div>
        <div id="tech" className="-mt-5"><Projects /></div>
      </div>
    </StrictMode>
  );
}
