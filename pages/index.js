import About from "@/components/About/About";
import Contato from "@/components/Contato/Contato";
import Main from "@/components/Main/Main";
import Projects from "@/components/Projects/Projects";
import BackgroundHome from "@/components/VideoBackground/BackgroundHome";
import Layout from "@/layout/Layout";

import Aos from "aos";
import 'aos/dist/aos.css'

import { useEffect } from "react";





export default function Home() {
  useEffect(() =>{
    Aos.init({duration:1500});
  },[])

  return (
    <>
      <Layout>
        <div className="relative h-screen  bg-slate-600">
        <BackgroundHome />
          <div className="relative z-2">
            <Main />
          </div>
        </div>
        <Projects  />
      </Layout>
      <Contato />
      <About />
    </>
  );
}
