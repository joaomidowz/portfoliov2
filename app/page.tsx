import About from "@/components/About";
import Header from "@/components/Header";
import Techs from "@/components/Techs"
import Image from "next/image";
import { StrictMode } from "react";


export default function Home() {
  return (
    <StrictMode>
      <div className="h-screen ">
        <div id="home" className=""><Header /></div>
        <div id="tech" className="-mt-5"><Techs /></div>
        <div id="tech" className="-mt-5"><About /></div>
      </div>
    </StrictMode>
  );
}
